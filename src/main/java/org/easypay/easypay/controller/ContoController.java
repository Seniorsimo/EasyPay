package org.easypay.easypay.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import org.easypay.easypay.dao.entity.Conto;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.ClientRepository;
import org.easypay.easypay.dao.repository.ContoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/conti")
@Tag(name = "Conto", description = "Account listing")
public class ContoController implements ErrorHandlingController, SelfHandlingController {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ContoRepository contoRepository;

    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @Operation(summary = "Retrieve all client accounts")
    @ApiResponses(
            value = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Successfully retrieved client account's list",
                        content = @Content(
                                array = @ArraySchema(
                                        schema = @Schema(
                                                implementation = Conto.class))))
                ,
                @ApiResponse(
                        responseCode = "401",
                        description = "You are not authorized to view the resource",
                        content = @Content)
                ,
                @ApiResponse(
                        responseCode = "403",
                        description = "Accessing the account's list is forbidden",
                        content = @Content)
            })
    public ResponseEntity<List<Conto>> getAll() {
        return ResponseEntity.ok(contoRepository.findAll());
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @Operation(summary = "Retrieve account by id")
    @ApiResponses(
            value = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Successfully retrieved account",
                        content = @Content(
                                schema = @Schema(
                                        implementation = Conto.class)))
                ,
                @ApiResponse(
                        responseCode = "401",
                        description = "You are not authorized to view the resource",
                        content = @Content)
                ,
                @ApiResponse(
                        responseCode = "403",
                        description = "Accessing the account's infos is forbidden",
                        content = @Content)
            })
    public ResponseEntity getById(@PathVariable("id") String id) {
        return ResponseEntity.ok(contoRepository.findById(getContoId(clientRepository, id))
                .orElseThrow(() -> new NotFoundException(Conto.class, "id", id)));
    }
}
