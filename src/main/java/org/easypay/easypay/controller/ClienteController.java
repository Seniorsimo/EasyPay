package org.easypay.easypay.controller;

import java.util.List;
import org.easypay.easypay.dao.entity.Cliente;
import org.easypay.easypay.bean.Response;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.persistence.Transient;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.easypay.easypay.dao.exception.CustomException;
import org.easypay.easypay.dao.exception.InvalidRequestException;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.exception.WrongPinException;
import org.easypay.easypay.dao.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;

@RestController
@RequestMapping("/api")
public class ClienteController {
    
    private static final Logger LOG = Logger.getLogger(ClienteController.class);

    @Autowired
    private ClientRepository clientRepository;

    @PostConstruct
    public void init() {
        clientRepository.save(Cliente.builder().id("001").pin("0001").token("0010001").nome("Paolo Pioppo").budget(5000).build());
        clientRepository.save(Cliente.builder().id("002").pin("0002").token("0020002").nome("Anna Dico").budget(5).build());
    }

    @ExceptionHandler(CustomException.class)
    public Response handleNotFound(CustomException exception) {
        return Response.create(exception);
    }

    //se usi postman per testare, rimuovi lh'header: application/x-www-form-urlencoded
    @PostMapping("/clienti")
    public Response getCliente(@Valid LoginForm loginForm, BindingResult result) {
        if (!result.hasErrors()) {
            switch (loginForm.getType()) {
                case ID_AND_PIN:
                    return getClienteById(loginForm.getId(), loginForm.getPin());
                case TOKEN:
                    return getClienteByToken(loginForm.getToken());
                default:
                    throw new InvalidRequestException(Cliente.class.getName());
            }
        }
        LOG.error(result.getAllErrors());
        throw new InvalidRequestException(Cliente.class.getName());
    }

    private Response getClienteById(@NotNull String id, @NotNull String pin) {
        Cliente cliente = clientRepository.findById(id).orElseThrow(() -> new NotFoundException(Cliente.class.getName(), "id", id));
        if (cliente.getPin().equals(pin)) {
            return Response.create(cliente);
        }
        throw new WrongPinException(Cliente.class.getName());
    }

    private Response getClienteByToken(@NotNull String token) {
        List<Cliente> clienti = clientRepository.findAllByToken(token);
        if (clienti.size() < 1) {
            throw new NotFoundException(Cliente.class.getName(), "token", token);
        }
        return Response.create(clienti.get(0));
    }

    @Data
    @RequiredArgsConstructor
    public static class LoginForm {

        public enum LoginType {
            ID_AND_PIN, TOKEN, INVALID
        }

        private String id, pin, token;

        @Transient
        protected LoginType getType() {
            if (id != null && !id.isEmpty() && pin != null && !pin.isEmpty()) {
                return LoginType.ID_AND_PIN;
            }
            if (token != null && !token.isEmpty()) {
                return LoginType.TOKEN;
            }
            return LoginType.INVALID;
        }
    }

}
