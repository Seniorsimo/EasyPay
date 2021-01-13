package org.easypay.easypay.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.easypay.easypay.dao.entity.Conto;
import org.easypay.easypay.dao.entity.Movimento;
import org.easypay.easypay.dao.exception.InvalidArgumentException;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.ClientRepository;
import org.easypay.easypay.dao.repository.ContoRepository;
import org.easypay.easypay.dao.repository.MovimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/movimenti")
public class MovimentoController implements ErrorHandlingController, SelfHandlingController {

    private enum Direction {
        IN, OUT
    }

    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private ContoRepository contoRepository;

    @Autowired
    private MovimentoRepository movimentoRepository;

    @GetMapping("")
    public ResponseEntity getAll(
            @RequestParam(required = true) String conto,
            @RequestParam(required = false) String direction,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to
    ) {
        Direction d = null;
        if (direction != null && !direction.isEmpty()) {
            try {
                d = Direction.valueOf(direction);
            } catch (IllegalArgumentException e) {
                throw new InvalidArgumentException("direction", Stream.of(Direction.values()).map(Direction::name).reduce((x, y) -> String.join(" ", new String[]{x, y})).orElse(""));
            }
        }
        Conto c = contoRepository.findById(getContoId(clientRepository, conto))
                .orElseThrow(() -> new NotFoundException(Conto.class, "id", conto));
        List<Movimento> res = null;
        if (d != null) {
            switch (d) {
                case IN:
                    res = c.getEntrate();
                    break;
                case OUT:
                    res = c.getUscite();
                    break;
                default:
                    res = c.getMovimenti();
            }
        } else {
            res = c.getMovimenti();
        }
        if (from != null) {
            res = res.stream()
                    .filter(x -> !x.getTimestamp().toLocalDate().isBefore(from))
                    .collect(Collectors.toList());
        }
        if (to != null) {
            res = res.stream()
                    .filter(x -> !x.getTimestamp().toLocalDate().isAfter(to))
                    .collect(Collectors.toList());
        }

        return ResponseEntity.ok(res);
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable("id") long id) {
        return ResponseEntity.ok(movimentoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Movimento.class, "id", id)));
    }
}
