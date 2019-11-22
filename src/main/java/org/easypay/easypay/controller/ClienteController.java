package org.easypay.easypay.controller;

import org.easypay.easypay.bean.Cliente;
import org.easypay.easypay.bean.Response;
import org.easypay.easypay.bean.ResponseError;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


@RestController
@RequestMapping("/api")
public class ClienteController {

    @PersistenceContext
    EntityManager em;

    @PostConstruct
    public void init() {
        em.persist(Cliente.builder().id("001").pin("0001").token("0010001").nome("Paolo Pioppo").budget(5000).build());
        em.persist(Cliente.builder().id("002").pin("0002").token("0020002").nome("Anna Dico").budget(5).build());
    }

    @PostMapping("/clienti")
    public Response getCliente(@RequestParam("id") String id, @RequestParam("pin") String pin, @RequestParam("token") String token) {
        if (id != null && pin != null) {
            return this.getClienteByPin(id, pin);
        } else if (token != null) {
            return this.getClienteByToken(token);
        } else {
            return Response.builder().success(false).error(new ResponseError("NO_COUNT", "conto dell'utente non trovato")).build();
        }
    }

    private Response getClienteByPin(String id, String pin) {
        String index = id + pin;
        Cliente cliente = em.find(Cliente.class, index);
        if (cliente != null) {
            return Response.builder().success(true).body(cliente).build();
        } else {
            return Response.builder().success(false).error(new ResponseError("NO_COUNT", "conto dell'utente non trovato")).build();
        }
    }

    private Response getClienteByToken(String token) {
        Cliente cliente = em.find(Cliente.class, token);
        if (cliente != null) {
            return Response.builder().success(true).body(cliente).build();
        } else {
            return Response.builder().success(false).error(new ResponseError("NO_COUNT", "conto dell'utente non trovato")).build();
        }
    }


}
