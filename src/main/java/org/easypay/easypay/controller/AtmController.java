package org.easypay.easypay.controller;

import org.apache.log4j.Logger;
import org.easypay.easypay.bean.Response;
import org.easypay.easypay.dao.entity.Atm;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.AtmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/atm")
public class AtmController implements ErrorHandlingController {

    private static final Logger LOG = Logger.getLogger(AtmController.class);

    @Autowired
    private AtmRepository atmRepository;

    @GetMapping("")
    public Response getAll() {
        return Response.create(atmRepository.findAll());
    }

    @GetMapping("/{id}")
    public Response getById(@PathVariable("id") long id) {
        return Response.create(atmRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Atm.class, "id", id)));
    }

}
