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
public class UsernameTakenException extends CustomException {

    private static final String ERROR_CODE = "USERNAME_TAKEN";

    private final String username;

    public UsernameTakenException(String username) {
        super(HttpStatus.BAD_REQUEST, ERROR_CODE, String.format("Username '%s' was already taken", username));
        this.username = username;
    }

    public String getUsername() {
        return this.username;
    }
}
