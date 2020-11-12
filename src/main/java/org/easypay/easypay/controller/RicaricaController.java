package org.easypay.easypay.controller;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.easypay.easypay.dao.entity.Atm;
import org.easypay.easypay.dao.entity.Conto;
import org.easypay.easypay.dao.entity.Ricarica;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.AtmRepository;
import org.easypay.easypay.dao.repository.ContoRepository;
import org.easypay.easypay.dao.repository.RicaricaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ricariche")
public class RicaricaController implements ErrorHandlingController {

    @Autowired
    private ContoRepository contoRepository;

    @Autowired
    private AtmRepository atmRepository;

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

    @PostMapping("")
    public ResponseEntity<Ricarica> save(@Valid @RequestBody RequestRechargeBody body) {
        Atm from = atmRepository.findById(body.getFrom())
                .orElseThrow(() -> new NotFoundException(Atm.class, "id", body.from));
        Conto to = contoRepository.findById(body.to)
                .orElseThrow(() -> new NotFoundException(Conto.class, "id", body.to));
        Ricarica r = new Ricarica(to, from, body.value);
        return ResponseEntity.ok(ricaricaRepository.save(r));
    }

    @Data
    @RequiredArgsConstructor
    public static class RequestRechargeBody {

        @NotNull
        private Long from;
        @NotNull
        private Long to;
        @NotNull
        private Float value;
    }

}
