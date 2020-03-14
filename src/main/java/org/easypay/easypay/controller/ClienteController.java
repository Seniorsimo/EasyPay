package org.easypay.easypay.controller;

import javax.persistence.Transient;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.easypay.easypay.bean.Response;
import org.easypay.easypay.dao.entity.Cliente;
import org.easypay.easypay.dao.exception.InvalidRequestException;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.exception.WrongPinException;
import org.easypay.easypay.dao.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clienti")
public class ClienteController implements ErrorHandlingController {

    private static final Logger LOG = Logger.getLogger(ClienteController.class);

    @Autowired
    private ClientRepository clientRepository;

    @GetMapping("")
    public Response getAll() {
        return Response.create(clientRepository.findAll());
    }

    @GetMapping("/{id}")
    public Response getById(@PathVariable("id") long id) {
        return Response.create(clientRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Cliente.class, "id", id)));
    }

    //se usi postman per testare, rimuovi lh'header: application/x-www-form-urlencoded
    @PostMapping("")
    public Response getCliente(@Valid LoginForm loginForm, BindingResult result) {
        if (!result.hasErrors()) {
            switch (loginForm.getType()) {
                case ID_AND_PIN:
                    return getClienteById(loginForm.getId(), loginForm.getPin());
                case TOKEN:
                    return getClienteByToken(loginForm.getToken());
                default:
                    throw new InvalidRequestException(Cliente.class);
            }
        }
        LOG.error(result.getAllErrors());
        throw new InvalidRequestException(Cliente.class);
    }

    private Response getClienteById(@NotNull long id, @NotNull String pin) {
        Cliente cliente = clientRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Cliente.class, "id", id));
        if (cliente.getPin().equals(pin)) {
            return Response.create(cliente);
        }
        throw new WrongPinException(Cliente.class);
    }

    private Response getClienteByToken(@NotNull String token) {
        return Response.create(clientRepository.findByToken(token)
                .orElseThrow(() -> new NotFoundException(Cliente.class, "token", token)));
    }

    @Data
    @RequiredArgsConstructor
    public static class LoginForm {

        public enum LoginType {
            ID_AND_PIN, TOKEN, INVALID
        }

        private Long id;
        private String pin, token;

        @Transient
        protected LoginType getType() {
            if (id != null && pin != null && !pin.isEmpty()) {
                return LoginType.ID_AND_PIN;
            }
            if (token != null && !token.isEmpty()) {
                return LoginType.TOKEN;
            }
            return LoginType.INVALID;
        }
    }

}
