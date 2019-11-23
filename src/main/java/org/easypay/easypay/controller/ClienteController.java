package org.easypay.easypay.controller;

import java.util.List;
import org.easypay.easypay.dao.entity.Cliente;
import org.easypay.easypay.bean.Response;
import org.easypay.easypay.bean.ResponseError;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.validation.constraints.NotNull;
import org.easypay.easypay.dao.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api")
public class ClienteController {

    @Autowired
    private ClientRepository clientRepository;

    @PostConstruct
    public void init() {
        clientRepository.save(Cliente.builder().id("001").pin("0001").token("0010001").nome("Paolo Pioppo").budget(5000).build());
        clientRepository.save(Cliente.builder().id("002").pin("0002").token("0020002").nome("Anna Dico").budget(5).build());
    }

    @PostMapping("/clienti")
    public Response getCliente(@RequestParam("id") String id, @RequestParam("pin") String pin, @RequestParam("token") String token) {
        if (id != null && pin != null) {
            return this.getClienteById(id, pin);
        } else if (token != null) {
            return this.getClienteByToken(token);
        } else {
            return Response.builder().success(false).error(new ResponseError("NO_COUNT", "conto dell'utente non trovato")).build();
        }
    }

    private Response getClienteById(@NotNull String id, @NotNull String pin) {
        Cliente cliente = clientRepository.findById(id).orElse(null);
        if (cliente != null && cliente.getPin().equals(pin)) {
            return Response.builder().success(true).body(cliente).build();
        } else {
            return Response.builder().success(false).error(new ResponseError("NO_COUNT", "conto dell'utente non trovato")).build();
        }
    }

    private Response getClienteByToken(@NotNull String token) {
        List<Cliente> clienti = clientRepository.findAllByToken(token);
        Cliente cliente = null;
        if (clienti != null && clienti.size() == 1 && (cliente = clienti.get(0)) != null) {
            return Response.builder().success(true).body(cliente).build();
        } else {
            return Response.builder().success(false).error(new ResponseError("NO_COUNT", "conto dell'utente non trovato")).build();
        }
    }

}
