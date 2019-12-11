/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.exception;

import lombok.Data;

/**
 *
 * @author simo
 */
@Data
public abstract class CustomException extends RuntimeException{
    
    private final String id;
    private final String message;
    
    public CustomException(String id, String message){
        super(String.format("%s: %s", id, message));
        this.id = id;
        this.message = message;
    }
    
}
