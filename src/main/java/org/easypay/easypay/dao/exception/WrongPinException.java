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
public class WrongPinException extends CustomException {

    private static final String ERROR_CODE = "WRONG_PIN";
    private final String resourceName;

    public WrongPinException(String resourceName) {
        super(ERROR_CODE, "Wrong pin");
        this.resourceName = resourceName;
    }

    public String getResourceName() {
        return resourceName;
    }

}
