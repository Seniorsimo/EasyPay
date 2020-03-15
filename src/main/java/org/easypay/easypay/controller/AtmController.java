package org.easypay.easypay.controller;

import org.apache.log4j.Logger;
import org.easypay.easypay.dao.entity.Atm;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.AtmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity getAll() {
        return ResponseEntity.ok(atmRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable("id") long id) {
        return ResponseEntity.ok(atmRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Atm.class, "id", id)));
    }

}
