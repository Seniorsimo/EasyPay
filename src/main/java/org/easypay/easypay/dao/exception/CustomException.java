/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.exception;

import lombok.Data;
import org.springframework.http.HttpStatus;

/**
 *
 * @author simo
 */
@Data
public abstract class CustomException extends RuntimeException {

    private final HttpStatus status;
    private final String id;
    private final String message;

    public CustomException(HttpStatus status, String id, String message) {
        super(String.format("%s: %s", id, message));
        this.status = status;
        this.id = id;
        this.message = message;
    }

}
