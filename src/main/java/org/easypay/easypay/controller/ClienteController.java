package org.easypay.easypay.controller;

import io.swagger.annotations.*;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.easypay.easypay.dao.entity.Cliente;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clienti")
@Api(value = "Client", description = "Client listing")
public class ClienteController implements ErrorHandlingController, SelfHandlingController {

    private static final Logger LOG = Logger.getLogger(ClienteController.class);

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "Retrieve all client")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully retrieved client's list")
        ,
        @ApiResponse(code = 401, message = "You are not authorized to view the resource")
        ,
        @ApiResponse(code = 403, message = "Accessing the client's list is forbidden")
    })
    public ResponseEntity<List<Cliente>> getAll() {
        return ResponseEntity.ok(clientRepository.findAll());
    }

    @PostMapping(value = "",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "Create a client")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully created user")
        ,
        @ApiResponse(code = 400, message = "Request was incorrect")
        ,
        @ApiResponse(code = 401, message = "You are not authorized to create client")
    })
    public ResponseEntity<Cliente> create(@Valid @RequestBody ClienteCreate cliente) {
        return ResponseEntity.ok(clientRepository.save(Cliente.builder()
                .username(cliente.getUsername())
                .pin(passwordEncoder.encode(cliente.getPin()))
                .nome(cliente.getNome())
                .cognome(cliente.getCognome())
                .cf(cliente.getCf())
                .build()));
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "Retrieve client by id")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully retrieved client")
        ,
        @ApiResponse(code = 401, message = "You are not authorized to view the resource")
        ,
        @ApiResponse(code = 403, message = "Accessing the client is forbidden")
    })
    public ResponseEntity<Cliente> getById(@PathVariable("id") String id) {
        return ResponseEntity.ok(clientRepository.findById(getUserId(id))
                .orElseThrow(() -> new NotFoundException(Cliente.class, "id", id)));
    }

    @PostMapping(value = "/{id}",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "Edit client by id")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully edited client")
        ,
        @ApiResponse(code = 400, message = "Request was incorrect")
        ,
        @ApiResponse(code = 401, message = "You are not authorized to edit the resource")
        ,
        @ApiResponse(code = 403, message = "Accessing the client is forbidden")
    })
    public ResponseEntity<Cliente> edit(
            @PathVariable("id") long id,
            @Valid @RequestBody ClienteEdit cliente
    ) {
        return ResponseEntity.ok(clientRepository.findById(id)
                .map(u -> {
                    u.setNome(cliente.getNome());
                    u.setCognome(cliente.getCognome());
                    u.setCf(cliente.getCf());
                    clientRepository.save(u);
                    return u;
                })
                .orElseThrow(() -> new NotFoundException(Cliente.class, "id", id)));
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "Delete client by id")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully deleted client")
        ,
        @ApiResponse(code = 401, message = "You are not authorized to delete the resource")
        ,
        @ApiResponse(code = 403, message = "Accessing the client is forbidden")
    })
    public ResponseEntity<Cliente> deleteById(@PathVariable("id") long id) {
        return ResponseEntity.ok(clientRepository.findById(id)
                .map(u -> {
                    clientRepository.delete(u);
                    return u;
                })
                .orElseThrow(
                        () -> new NotFoundException(Cliente.class, "id", id)));
    }

    @Data
    @AllArgsConstructor
    @RequiredArgsConstructor
    public static class ClienteCreate extends ClienteEdit {

        @NotBlank
        @ApiModelProperty(
                position = 1,
                required = true,
                value = "The login credential"
        )
        private String username;

        @NotBlank
        @ApiModelProperty(
                position = 2,
                required = true,
                value = "The login secret"
        )
        private String pin;

    }

    @Data
    @AllArgsConstructor
    @RequiredArgsConstructor
    public static class ClienteEdit {

        @NotBlank
        @ApiModelProperty(
                position = 10,
                required = true,
                value = "Client firstname"
        )
        private String nome;

        @NotBlank
        @ApiModelProperty(
                position = 11,
                required = true,
                value = "Client lastname"
        )
        private String cognome;

        @NotBlank
        @ApiModelProperty(
                position = 12,
                required = true,
                value = "Client fiscal code"
        )
        private String cf;
    }
}
