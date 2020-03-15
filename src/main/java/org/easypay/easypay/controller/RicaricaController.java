package org.easypay.easypay.controller;

import org.easypay.easypay.dao.entity.Ricarica;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.RicaricaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity getAll() {
        return ResponseEntity.ok(ricaricaRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable("id") long id) {
        return ResponseEntity.ok(ricaricaRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Ricarica.class, "id", id)));
    }
}
