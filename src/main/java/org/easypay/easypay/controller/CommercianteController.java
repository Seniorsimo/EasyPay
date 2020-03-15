package org.easypay.easypay.controller;

import org.easypay.easypay.dao.entity.Commerciante;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.CommercianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/commercianti")
public class CommercianteController implements ErrorHandlingController {

    @Autowired
    private CommercianteRepository commercianteRepository;

    @GetMapping("")
    public ResponseEntity getAll() {
        return ResponseEntity.ok(commercianteRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable("id") long id) {
        return ResponseEntity.ok(commercianteRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Commerciante.class, "id", id)));
    }
}
