package org.easypay.easypay.controller;

import org.easypay.easypay.bean.Response;
import org.easypay.easypay.dao.entity.Conto;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.ContoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/conti")
public class ContoController implements ErrorHandlingController {

    @Autowired
    private ContoRepository contoRepository;

    @GetMapping("")
    public Response getAll() {
        return Response.create(contoRepository.findAll());
    }

    @GetMapping("/{id}")
    public Response getById(@PathVariable("id") long id) {
        return Response.create(contoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Conto.class, "id", id)));
    }
}
