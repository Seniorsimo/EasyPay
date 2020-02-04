package org.easypay.easypay.controller;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.easypay.easypay.bean.Response;
import org.easypay.easypay.dao.entity.Cliente;
import org.easypay.easypay.dao.exception.NotFoundException;
import org.easypay.easypay.dao.exception.OutOfBudgetException;
import org.easypay.easypay.dao.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.apache.log4j.Logger;

import java.util.Optional;

@RequestMapping("/api")
@RestController
public class PagamentoController {

    private static final Logger LOG = Logger.getLogger(PagamentoController.class);

    @Autowired
    private ClientRepository clientRepository;

    @PostMapping("/pagamenti")
    public Response pagamento(@RequestBody RequestPayBody body) {
        Optional<Cliente> cliente = clientRepository.findById(body.idCliente);
        if(!cliente.isPresent()) {
            return Response.create(new NotFoundException(Cliente.class.getName(), "id", body.idCliente));
        } else if(cliente.get().getBudget() < body.prezzo) {
            return Response.create(new OutOfBudgetException(body.idCliente));
        }
        // Il pagamento per ora è solo un mock e non salva nulla nello store
        return Response.create(null);
    }

    @Data
    @RequiredArgsConstructor
    public static class RequestPayBody {
        private String idCommerciante;
        private String idCliente;
        private Float prezzo;
    }

}
