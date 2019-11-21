package org.easypay.easypay.controller;

import org.easypay.easypay.bean.Commerciante;
import org.easypay.easypay.bean.Response;
import org.easypay.easypay.bean.ResponseError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.HashMap;


@RestController
@RequestMapping("/api")
public class CommercianteController {

    private static HashMap<String, Commerciante> db;

    @PostConstruct
    public void init() {
        db = new HashMap<>();
        db.put("001", Commerciante.builder().idConto("001").nome("Mario Rossi").nomenclatura("Gelateria Buongustario").build());
        db.put("002", Commerciante.builder().idConto("002").nome("Paolo Bianco").nomenclatura("Pizzeria Bufalona").build());
    }

    @GetMapping("/commercianti/{idConto}")
    public Response getCommerciante(@PathVariable("idConto") String idConto) {
        if (db.containsKey(idConto)) {
            return Response.builder().success(true).body(db.get(idConto)).build();
        } else {
            return Response.builder().success(false).error(new ResponseError("NO_COUNT", "conto del commerciante non trovato")).build();
        }

    }


}
