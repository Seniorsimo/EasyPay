/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.controller;

import org.easypay.easypay.bean.Response;
import org.easypay.easypay.dao.exception.CustomException;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 *
 * @author simo
 */
public interface ErrorHandlingController {

    @ExceptionHandler(CustomException.class)
    public default Response handleNotFound(CustomException exception) {
        return Response.create(exception);
    }

}
