package org.easypay.easypay.controller;

import org.easypay.easypay.bean.Commerciante;
import org.easypay.easypay.bean.Response;
import org.easypay.easypay.bean.ResponseError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;


@RestController
@RequestMapping("/api")
public class CommercianteController {

    @PersistenceContext
    EntityManager em;

    @PostConstruct
    public void init() {
        em.persist(Commerciante.builder().idConto("001").nome("Mario Rossi").nomenclatura("Gelateria Buongustario").build());
        em.persist(Commerciante.builder().idConto("002").nome("Paolo Bianco").nomenclatura("Pizzeria Bufalona").build());
    }

    @GetMapping("/commercianti/{idConto}")
    public Response getCommerciante(@PathVariable("idConto") String idConto) {
        Commerciante commerciante = em.find(Commerciante.class, idConto );
        if (commerciante != null) {
            return Response.builder().success(true).body(commerciante).build();
        } else {
            return Response.builder().success(false).error(new ResponseError("NO_COUNT", "conto del commerciante non trovato")).build();
        }

    }


}
