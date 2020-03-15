/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.controller;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.easypay.easypay.dao.exception.CustomException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 *
 * @author simo
 */
public interface ErrorHandlingController {

    @ExceptionHandler(CustomException.class)
    public default ResponseEntity handleNotFound(CustomException exception) {
        return ResponseEntity.status(exception.getStatus())
                .body(Error.builder().type(exception.getId()).message(exception.getMessage()).build());
    }

    @Data
    @Builder
    @AllArgsConstructor
    @RequiredArgsConstructor
    public static class Error {

        private String type, message;
    }

}
