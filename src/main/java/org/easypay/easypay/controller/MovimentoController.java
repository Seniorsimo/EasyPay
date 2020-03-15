package org.easypay.easypay.controller;

import org.easypay.easypay.dao.entity.Movimento;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.MovimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/movimenti")
public class MovimentoController implements ErrorHandlingController {

    @Autowired
    private MovimentoRepository movimentoRepository;

    @GetMapping("")
    public ResponseEntity getAll() {
        return ResponseEntity.ok(movimentoRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable("id") long id) {
        return ResponseEntity.ok(movimentoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Movimento.class, "id", id)));
    }
}
