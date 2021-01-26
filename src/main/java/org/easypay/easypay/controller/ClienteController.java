package org.easypay.easypay.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.easypay.easypay.auth.UserAuthenticationService;
import org.easypay.easypay.dao.entity.Cliente;
import org.easypay.easypay.dao.entity.Commerciante;
import org.easypay.easypay.dao.exception.InvalidRequestException;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.exception.UsernameTakenException;
import org.easypay.easypay.dao.projection.ClienteView;
import org.easypay.easypay.dao.repository.ClientRepository;
import org.easypay.easypay.dao.repository.CredenzialiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clienti")
@Tag(name = "Client", description = "Client listing")
public class ClienteController implements ErrorHandlingController, SelfHandlingController {

    private static final Logger LOG = Logger.getLogger(ClienteController.class);

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private CredenzialiRepository credenzialiRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @Operation(summary = "Retrieve all client")
    @ApiResponses(
            value = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Successfully retrieved client's list",
                        content = @Content(
                                array = @ArraySchema(
                                        schema = @Schema(
                                                implementation = ClienteView.class))))
                ,
                @ApiResponse(
                        responseCode = "401",
                        description = "You are not authorized to view the resource",
                        content = @Content)
                ,
                @ApiResponse(
                        responseCode = "403",
                        description = "Accessing the client's list is forbidden",
                        content = @Content)
            })
    public ResponseEntity<List<ClienteView>> getAll() {
        return ResponseEntity.ok(clientRepository.findAll()
                .stream()
                .map(x -> Cliente.getClientView(x))
                .collect(Collectors.toList()));
    }

    @PostMapping(value = "",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    @ApiOperation(value = "Create a client")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully created user")
//        ,
//        @ApiResponse(code = 400, message = "Request was incorrect")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to create client")
//    })
    public ResponseEntity<Cliente> create(@Valid @RequestBody ClienteCreate cliente) {
        if (credenzialiRepository.existsById(cliente.getEmail().toLowerCase())) {
            throw new UsernameTakenException(cliente.getEmail());
        }
        switch (cliente.getType()) {
            case "cliente":
                return ResponseEntity.ok(clientRepository.save(Cliente.builder()
                        .username(cliente.getEmail())
                        .password(passwordEncoder.encode(cliente.getPassword()))
                        .nome(cliente.getNome())
                        .cognome(cliente.getCognome())
                        .cf(cliente.getCf())
                        .birthDate(cliente.getBirth_date())
                        .phone(cliente.getPhone())
                        .address(cliente.getAddress())
                        .build()));
            case "commerciante":
                return ResponseEntity.ok(clientRepository.save(Commerciante.builder()
                        .username(cliente.getEmail())
                        .password(passwordEncoder.encode(cliente.getPassword()))
                        .nome(cliente.getNome())
                        .cognome(cliente.getCognome())
                        .cf(cliente.getCf())
                        .birthDate(cliente.getBirth_date())
                        .phone(cliente.getPhone())
                        .address(cliente.getAddress())
                        .pIva(cliente.getPiva())
                        .ragSoc(cliente.getRagSoc())
                        .build()));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    @ApiOperation(value = "Retrieve client by id")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully retrieved client")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to view the resource")
//        ,
//        @ApiResponse(code = 403, message = "Accessing the client is forbidden")
//    })
    public ResponseEntity<?> getById(
            @PathVariable("id") String id,
            @RequestParam(name = "otp", required = false) String otp,
            @RequestParam(name = "pin", required = false) String pin
    ) {
        UserAuthenticationService.MyUser user = (UserAuthenticationService.MyUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long clientId = getUserId(id);
        Cliente c = clientRepository.findById(clientId)
                .orElseThrow(() -> new NotFoundException(Cliente.class, "id", id));
        if ("self".equals(id) || Long.parseLong(id) == user.getId()) {
            return ResponseEntity.ok(c);
        }
        if ((otp == null || otp.isEmpty()) && (pin == null || pin.isEmpty())) {
            return ResponseEntity.ok(Cliente.getClientView(c));
        } else {
            if (otp != null && !otp.isEmpty() && otp.equals(c.getOtp())) {
                return ResponseEntity.ok(c);
            }
            if (pin != null && !pin.isEmpty() && pin.equals(c.getPin())) {
                return ResponseEntity.ok(c);
            }
        }
        throw new InvalidRequestException(Cliente.class);
    }

    @PostMapping(value = "/{id}",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    @ApiOperation(value = "Edit client by id")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully edited client")
//        ,
//        @ApiResponse(code = 400, message = "Request was incorrect")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to edit the resource")
//        ,
//        @ApiResponse(code = 403, message = "Accessing the client is forbidden")
//    })
    public ResponseEntity<Cliente> edit(
            @PathVariable("id") String id,
            @Valid @RequestBody ClienteEdit cliente
    ) {
        return ResponseEntity.ok(clientRepository.findById(getUserId(id))
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
//    @ApiOperation(value = "Delete client by id")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully deleted client")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to delete the resource")
//        ,
//        @ApiResponse(code = 403, message = "Accessing the client is forbidden")
//    })
    public ResponseEntity<Cliente> deleteById(@PathVariable("id") String id) {
        return ResponseEntity.ok(clientRepository.findById(getUserId(id))
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
        @Pattern(regexp = "^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?[@](([a-zA-Z]+[.])+[a-zA-Z]{2,3})$", message = "Email must be a valid email address")
//        @ApiModelProperty(
//                position = 1,
//                required = true,
//                value = "The login email"
//        )
        private String email;

        @NotBlank
        @Pattern.List({
            @Pattern(regexp = "^.*[0-9].*$", message = "Password must contain one digit.")
            ,
            @Pattern(regexp = "^.*[a-z].*$", message = "Password must contain one lowercase letter.")
            ,
            @Pattern(regexp = "^.*[A-Z].*$", message = "Password must contain one uppercase letter.")
            ,
            @Pattern(regexp = "^\\S+$", message = "Password must contain no whitespace.")
            ,
            @Pattern(regexp = "^.{5,32}$", message = "Password must be at least 5 character long")
        })
//        @ApiModelProperty(
//                position = 2,
//                required = true,
//                value = "The login password"
//        )
        private String password;

        @NotBlank
        @Pattern(regexp = "^cliente|commerciante$", message = "Valid values are [\"cliente\", \"commerciante\"]")
//        @ApiModelProperty(
//                position = 3,
//                required = true,
//                value = "The account type. Valid values are [\"cliente\", \"commerciante\"]"
//        )
        private String type;

    }

    @Data
    @AllArgsConstructor
    @RequiredArgsConstructor
    public static class ClienteEdit {

        @NotBlank
//        @ApiModelProperty(
//                position = 10,
//                required = true,
//                value = "Client firstname"
//        )
        private String nome;

        @NotBlank
//        @ApiModelProperty(
//                position = 11,
//                required = true,
//                value = "Client lastname"
//        )
        private String cognome;

        @NotBlank
//        @ApiModelProperty(
//                position = 12,
//                required = true,
//                value = "Client fiscal code"
//        )
        private String cf;

        @NotNull
//        @Pattern(regexp = "^[0-9]{2}[/][0-9]{2}[/](?:(?:[1][9][0-9]{2})|(?:[2][0][0-9]{2}))$", message = "Birth date must be in format 'dd/mm/yyyy'")
//        @ApiModelProperty(
//                position = 13,
//                required = true,
//                value = "Client birth date"
//        )
        private LocalDate birth_date;

        @NotBlank
        @Pattern(regexp = "^([+][0-9]{1,2})?([0-9]{8,10})$", message = "Phone number must be a valid number '(+xx)xxxxxxxxxx'. Space are not allowed")
//        @ApiModelProperty(
//                position = 14,
//                required = true,
//                value = "Client phone number"
//        )
        private String phone;

        @NotBlank
//        @ApiModelProperty(
//                position = 15,
//                required = true,
//                value = "Client address"
//        )
        private String address;

//        @ApiModelProperty(
//                position = 20,
//                required = true,
//                value = "VAT number"
//        )
        private String piva;

//        @ApiModelProperty(
//                position = 21,
//                required = true,
//                value = "Business name"
//        )
        private String ragSoc;
    }
}
