package org.easypay.easypay.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.DiscriminatorMapping;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.easypay.easypay.dao.entity.Conto;
import org.easypay.easypay.dao.entity.Movimento;
import org.easypay.easypay.dao.entity.Pagamento;
import org.easypay.easypay.dao.entity.Ricarica;
import org.easypay.easypay.dao.exception.InvalidArgumentException;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.ClientRepository;
import org.easypay.easypay.dao.repository.ContoRepository;
import org.easypay.easypay.dao.repository.MovimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/movimenti")
@Tag(name = "Movimenti", description = "Transation listing")
public class MovimentoController implements ErrorHandlingController, SelfHandlingController {

    public enum Direction {
        IN, OUT
    }

    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private ContoRepository contoRepository;

    @Autowired
    private MovimentoRepository movimentoRepository;

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
                                                implementation = Movimento.class))))
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
    public ResponseEntity<List<Movimento>> getAll(
            @Parameter(description = "The internal identifier of the account")
            @RequestParam(required = true) String conto,
            @Parameter(description = "The transaction's direction", schema = @Schema(implementation = Direction.class))
            @RequestParam(required = false) String direction,
            @RequestParam(required = false)
            @Parameter(description = "The lowerbound date for search")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false)
            @Parameter(description = "The upperbound date for search")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to
    ) {
        Direction d = null;
        if (direction != null && !direction.isEmpty()) {
            try {
                d = Direction.valueOf(direction);
            } catch (IllegalArgumentException e) {
                throw new InvalidArgumentException("direction", Stream.of(Direction.values()).map(Direction::name).reduce((x, y) -> String.join(" ", new String[]{x, y})).orElse(""));

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
        if (from != null) {
            res = res.stream()
                    .filter(x -> !x.getTimestamp().toLocalDate().isBefore(from))
                    .collect(Collectors.toList());
        }
        if (to != null) {
            res = res.stream()
                    .filter(x -> !x.getTimestamp().toLocalDate().isAfter(to))
                    .collect(Collectors.toList());
        }

        return ResponseEntity.ok(res);
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
                                        oneOf = {
                                            Pagamento.class,
                                            Ricarica.class
                                        },
                                        discriminatorProperty = "type",
                                        discriminatorMapping = {
                                            @DiscriminatorMapping(value = "pagamento", schema = Pagamento.class)
                                            ,
                                            @DiscriminatorMapping(value = "ricarica", schema = Ricarica.class)
                                        })))
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
    public ResponseEntity<Movimento> getById(@PathVariable("id") long id) {
        return ResponseEntity.ok(movimentoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Movimento.class, "id", id)));
    }
}
