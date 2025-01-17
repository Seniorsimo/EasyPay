package org.easypay.easypay.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.easypay.easypay.dao.entity.Conto;
import org.easypay.easypay.dao.entity.Movimento;
import org.easypay.easypay.dao.entity.Pagamento;
import org.easypay.easypay.dao.exception.InvalidArgumentException;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.ClientRepository;
import org.easypay.easypay.dao.repository.ContoRepository;
import org.easypay.easypay.dao.repository.PagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pagamenti")
@Tag(name = "Pagamenti", description = "Transation between clients listing")
public class PagamentoController implements ErrorHandlingController, SelfHandlingController {

    private static final Logger LOG = Logger.getLogger(PagamentoController.class);

    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private ContoRepository contoRepository;

    @Autowired
    private PagamentoRepository pagamentoRepository;

    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @Operation(summary = "Retrieve all trancascion bound to an account")
    @ApiResponses(
            value = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Successfully retrieved account transaction",
                        content = @Content(
                                array = @ArraySchema(
                                        schema = @Schema(
                                                implementation = Pagamento.class))))
                ,
                @ApiResponse(
                        responseCode = "401",
                        description = "You are not authorized to view the resource",
                        content = @Content)
                ,
                @ApiResponse(
                        responseCode = "403",
                        description = "Accessing the transaction's list is forbidden",
                        content = @Content)
            })
    public ResponseEntity<List<Pagamento>> getAll(
            @Parameter(description = "The internal identifier of the account")
            @RequestParam(required = true) String conto,
            @Parameter(description = "The transaction's direction", schema = @Schema(implementation = MovimentoController.Direction.class))
            @RequestParam(required = false) String direction,
            @RequestParam(required = false)
            @Parameter(description = "The lowerbound date for search")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false)
            @Parameter(description = "The upperbound date for search")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to
    ) {
        MovimentoController.Direction d = null;
        if (direction != null && !direction.isEmpty()) {
            try {
                d = MovimentoController.Direction.valueOf(direction);
            } catch (IllegalArgumentException e) {
                throw new InvalidArgumentException("direction", Stream.of(MovimentoController.Direction.values()).map(MovimentoController.Direction::name).reduce((x, y) -> String.join(" ", new String[]{x, y})).orElse(""));

            }
        }
        Conto c = contoRepository.findById(getContoId(clientRepository, conto))
                .orElseThrow(() -> new NotFoundException(Conto.class,
                "id", conto));
        List<Movimento> res = null;
        if (d != null) {
            switch (d) {
                case IN:
                    res = c.getEntrate();
                    break;
                case OUT:
                    res = c.getUscite();
                    break;
                default:
                    res = c.getMovimenti();
            }
        } else {
            res = c.getMovimenti();
        }
        List<Pagamento> pList = null;
        pList = res.stream()
                .filter(x -> x instanceof Pagamento)
                .map(x -> (Pagamento) x)
                .collect(Collectors.toList());
        if (from != null) {
            pList = pList.stream()
                    .filter(x -> !x.getTimestamp().toLocalDate().isBefore(from))
                    .collect(Collectors.toList());
        }
        if (to != null) {
            pList = pList.stream()
                    .filter(x -> !x.getTimestamp().toLocalDate().isAfter(to))
                    .collect(Collectors.toList());
        }

        return ResponseEntity.ok(pList);
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @Operation(summary = "Retrieve transaction by id")
    @ApiResponses(
            value = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Successfully retrieved transaction",
                        content = @Content(
                                schema = @Schema(
                                        implementation = Pagamento.class)))
                ,
                @ApiResponse(
                        responseCode = "401",
                        description = "You are not authorized to view the resource",
                        content = @Content)
                ,
                @ApiResponse(
                        responseCode = "403",
                        description = "Accessing the transaction's infos is forbidden",
                        content = @Content)
            })
    public ResponseEntity<Pagamento> getById(@PathVariable("id") long id) {
        return ResponseEntity.ok(pagamentoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Pagamento.class, "id", id)));
    }

    @PostMapping(value = "",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @Operation(
            summary = "Create a transaction of type \"pagamento\"",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    required = true,
                    content = @Content(
                            schema = @Schema(
                                    implementation = RequestPayBody.class
                            )
                    )
            )
    )
    @ApiResponses(
            value = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Successfully created transaction",
                        content = @Content(
                                schema = @Schema(
                                        implementation = Pagamento.class)))
                ,
                @ApiResponse(
                        responseCode = "400",
                        description = "Request was incorrect",
                        content = @Content)
                ,
                @ApiResponse(
                        responseCode = "401",
                        description = "You are not authorized to crete the resource",
                        content = @Content)
            })
    public ResponseEntity<Pagamento> save(@Valid @RequestBody RequestPayBody body) {
        Conto from = contoRepository.findById(body.from)
                .orElseThrow(() -> new NotFoundException(Conto.class, "id", body.from));
        Conto to = contoRepository.findById(body.to)
                .orElseThrow(() -> new NotFoundException(Conto.class, "id", body.to));
        Pagamento p = new Pagamento(from, to, body.value);
        return ResponseEntity.ok(pagamentoRepository.save(p));
    }

    @Data
    @RequiredArgsConstructor
    @Schema(description = "Creation form")
    public static class RequestPayBody {

        @NotNull
        @Schema(description = "The id of the origin account")
        private Long from;
        @NotNull
        @Schema(description = "The id of the destination account")
        private Long to;
        @NotNull
        @Schema(description = "The amount to transfert")
        private Float value;
    }

}
