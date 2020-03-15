package org.easypay.easypay.controller;

import org.easypay.easypay.dao.entity.Conto;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.ContoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity getAll() {
        return ResponseEntity.ok(contoRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable("id") long id) {
        return ResponseEntity.ok(contoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Conto.class, "id", id)));
    }
}
