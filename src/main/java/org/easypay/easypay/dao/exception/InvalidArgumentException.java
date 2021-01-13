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
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class InvalidArgumentException extends CustomException {

    private static final String ERROR_CODE = "INVALID_ARGUMENT";

    private final String acceptedValues;
    private final String parameter;

    public InvalidArgumentException(String parameter, String acceptedValues) {
        super(HttpStatus.BAD_REQUEST, ERROR_CODE, String.format("Argument %s not acceptable. Accepted values are: '%s'", parameter, acceptedValues));
        this.acceptedValues = acceptedValues;
        this.parameter = parameter;
    }

    public String getAcceptedValues() {
        return acceptedValues;
    }

    public String getParameter() {
        return parameter;
    }

}
