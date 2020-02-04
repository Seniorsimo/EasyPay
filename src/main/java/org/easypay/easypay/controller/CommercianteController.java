package org.easypay.easypay.controller;

import org.easypay.easypay.dao.entity.Commerciante;
import org.easypay.easypay.bean.Response;
//import org.easypay.easypay.bean.ResponseError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.validation.constraints.NotNull;
import org.easypay.easypay.dao.exception.CustomException;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.CommercianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;

@RestController
@RequestMapping("/api")
public class CommercianteController {

    @Autowired
    private CommercianteRepository commercianteRepository;

    @PostConstruct
    public void init() {
        commercianteRepository.save(Commerciante.builder().idConto("001").nome("Mario Rossi").nomenclatura("Gelateria Buongustario").build());
        commercianteRepository.save(Commerciante.builder().idConto("002").nome("Paolo Bianco").nomenclatura("Pizzeria Bufalona").build());
    }
    
    @ExceptionHandler(CustomException.class)
    public Response handleNotFound(CustomException exception) {
        return Response.create(exception);
    }

    @GetMapping("/commercianti/{idConto}")
    public Response getCommerciante(@PathVariable("idConto") String idConto) {
        return Response.create(commercianteRepository.findById(idConto).orElseThrow(() -> new NotFoundException(Commerciante.class.getName(), "id", idConto)));
    }

}
