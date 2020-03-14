package org.easypay.easypay.controller;

import org.easypay.easypay.bean.Response;
import org.easypay.easypay.dao.entity.Ricarica;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.RicaricaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ricariche")
public class RicaricaController implements ErrorHandlingController {

    @Autowired
    private RicaricaRepository ricaricaRepository;

    @GetMapping("")
    public Response getAll() {
        return Response.create(ricaricaRepository.findAll());
    }

    @GetMapping("/{id}")
    public Response getById(@PathVariable("id") long id) {
        return Response.create(ricaricaRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Ricarica.class, "id", id)));
    }
}
