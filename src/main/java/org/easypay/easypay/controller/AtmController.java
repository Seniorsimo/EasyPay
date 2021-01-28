package org.easypay.easypay.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import org.apache.log4j.Logger;
import org.easypay.easypay.dao.entity.Atm;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.AtmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/atm")
@Tag(name = "ATM", description = "ATM listing")
public class AtmController implements ErrorHandlingController {

    private static final Logger LOG = Logger.getLogger(AtmController.class);

    @Autowired
    private AtmRepository atmRepository;

    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @Operation(summary = "Retrieve all ATMs")
    @ApiResponses(
            value = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Successfully retrieved ATM's list",
                        content = @Content(
                                array = @ArraySchema(
                                        schema = @Schema(
                                                implementation = Atm.class))))
                ,
                @ApiResponse(
                        responseCode = "401",
                        description = "You are not authorized to view the resource",
                        content = @Content)
                ,
                @ApiResponse(
                        responseCode = "403",
                        description = "Accessing the ATM's list is forbidden",
                        content = @Content)
            })
    public ResponseEntity<List<Atm>> getAll() {
        return ResponseEntity.ok(atmRepository.findAll());
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @Operation(summary = "Retrieve ATM by id")
    @ApiResponses(
            value = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Successfully retrieved ATM",
                        content = @Content(
                                schema = @Schema(
                                        implementation = Atm.class)))
                ,
                @ApiResponse(
                        responseCode = "401",
                        description = "You are not authorized to view the resource",
                        content = @Content)
                ,
                @ApiResponse(
                        responseCode = "403",
                        description = "Accessing the ATM's infos is forbidden",
                        content = @Content)
            })
    public ResponseEntity<Atm> getById(@PathVariable("id") long id) {
        return ResponseEntity.ok(atmRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Atm.class, "id", id)));
    }

}
