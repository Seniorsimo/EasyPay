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
public class NotFoundException extends CustomException {

    private static final String ERROR_CODE = "NO_COUNT";

    private final String resourceName;
    private final String fieldName;
    private final Object fieldValue;

    public NotFoundException(Class<?> c, String fieldName, Object fieldValue) {
        super(HttpStatus.NOT_FOUND, ERROR_CODE, String.format("%s not found with %s : '%s'", c.getSimpleName(), fieldName, fieldValue));
        this.resourceName = c.getSimpleName();
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }

    public String getResourceName() {
        return resourceName;
    }

    public String getFieldName() {
        return fieldName;
    }

    public Object getFieldValue() {
        return fieldValue;
    }
}
