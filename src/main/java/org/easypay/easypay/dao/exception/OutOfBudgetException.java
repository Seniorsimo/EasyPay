/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author simo
 */
@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class OutOfBudgetException extends CustomException {

    private static final String ERROR_CODE = "OUT_OF_BUDGET";

    private final long idCliente;

    public OutOfBudgetException(long idCliente) {
        super(HttpStatus.BAD_REQUEST, ERROR_CODE, String.format("budget del cliente %s insufficiente", idCliente));
        this.idCliente = idCliente;
    }

    public long getIdCliente() {
        return idCliente;
    }
}
