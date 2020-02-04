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
@ResponseStatus(value = HttpStatus.OK)
public class InvalidRequestException extends CustomException {

    private static final String ERROR_CODE = "INVALID_REQUEST";
    private final String resourceName;

    public InvalidRequestException(String resourceName) {
        super(ERROR_CODE, "Invalid request");
        this.resourceName = resourceName;
    }

    public String getResourceName() {
        return resourceName;
    }

}
