package org.easypay.easypay.controller;

import org.apache.log4j.Logger;
import org.easypay.easypay.dao.entity.Utente;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/utenti")
public class UtenteController implements ErrorHandlingController {

    private static final Logger LOG = Logger.getLogger(UtenteController.class);

    @Autowired
    private UtenteRepository utenteRepository;

    @GetMapping("")
    public ResponseEntity getAll() {
        return ResponseEntity.ok(utenteRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable("id") long id) {
        return ResponseEntity.ok(utenteRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Utente.class, "id", id)));
    }

}
