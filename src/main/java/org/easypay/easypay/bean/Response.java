package org.easypay.easypay.bean;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.easypay.easypay.dao.exception.CustomException;
import org.easypay.easypay.dao.exception.NotFoundException;

@Data
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@JsonIgnoreProperties(value = {"exception"})
public class Response<T> {
    Boolean success;
    T body;
    CustomException exception;
    
    public ResponseError getError(){
        return success ? null : ResponseError.builder()
                .id(exception.getId())
                .message(exception.getMessage())
                .build();
    }
    
    public static <X> Response<X> create(X body){
        if(body instanceof CustomException){
            return new Response(false, null, (CustomException)body);
        }
        return new Response<X>(true, body, null);
    }
}
