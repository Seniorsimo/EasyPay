package org.easypay.easypay.controller;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.easypay.easypay.bean.Response;
import org.easypay.easypay.dao.entity.Pagamento;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.repository.PagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class PagamentoController {

    private static final Logger LOG = Logger.getLogger(PagamentoController.class);

    @Autowired
    private PagamentoRepository pagamentoRepository;

    @GetMapping("")
    public Response getAll() {
        return Response.create(pagamentoRepository.findAll());
    }

    @GetMapping("/{id}")
    public Response getById(@PathVariable("id") long id) {
        return Response.create(pagamentoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Pagamento.class, "id", id)));
    }

//    @PostMapping("/pagamenti")
//    public Response pagamento(@RequestBody RequestPayBody body) {
//        Optional<Cliente> cliente = clientRepository.findById(body.idCliente);
//        if(!cliente.isPresent()) {
//            return Response.create(new NotFoundException(Cliente.class.getName(), "id", body.idCliente));
//        } else if(cliente.get().getBudget() < body.prezzo) {
//            return Response.create(new OutOfBudgetException(body.idCliente));
//        }
//        // Il pagamento per ora è solo un mock e non salva nulla nello store
//        return Response.create(null);
//    }
    @Data
    @RequiredArgsConstructor
    public static class RequestPayBody {

        private String idCommerciante;
        private String idCliente;
        private Float prezzo;
    }

}
