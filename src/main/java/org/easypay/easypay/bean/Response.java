package org.easypay.easypay.bean;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.easypay.easypay.dao.exception.CustomException;

@Data
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@JsonIgnoreProperties(value = {"exception"})
public class Response<T> {

    Boolean success;
    T response;
    CustomException exception;

    public ResponseError getError() {
        return success ? null : ResponseError.builder()
                .id(exception.getId())
                .message(exception.getMessage())
                .build();
    }

    public static <X> Response<X> create(X response) {
        if (response instanceof CustomException) {
            return new Response(false, null, (CustomException) response);
        }
        return new Response<X>(true, response, null);
    }
}
