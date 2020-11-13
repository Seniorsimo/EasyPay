package org.easypay.easypay.controller;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.easypay.easypay.dao.entity.Conto;
import org.easypay.easypay.dao.entity.Pagamento;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.ContoRepository;
import org.easypay.easypay.dao.repository.PagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/pagamenti")
@RestController
public class PagamentoController {

    private static final Logger LOG = Logger.getLogger(PagamentoController.class);

    @Autowired
    private ContoRepository contoRepository;

    @Autowired
    private PagamentoRepository pagamentoRepository;

    @GetMapping("")
    public ResponseEntity getAll() {
        return ResponseEntity.ok(pagamentoRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable("id") long id) {
        return ResponseEntity.ok(pagamentoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Pagamento.class, "id", id)));
    }

    @PostMapping("")
    public ResponseEntity<Pagamento> save(@Valid @RequestBody RequestPayBody body) {
        Conto from = contoRepository.findById(body.from)
                .orElseThrow(() -> new NotFoundException(Conto.class, "id", body.from));
        Conto to = contoRepository.findById(body.to)
                .orElseThrow(() -> new NotFoundException(Conto.class, "id", body.to));
        Pagamento p = new Pagamento(from, to, body.value);
        return ResponseEntity.ok(pagamentoRepository.save(p));
    }

    @Data
    @RequiredArgsConstructor
    public static class RequestPayBody {

        @NotNull
        private Long from;
        @NotNull
        private Long to;
        @NotNull
        private Float value;
    }

}
