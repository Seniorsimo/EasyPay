package org.easypay.easypay.bean;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class Response<T> {
    Boolean success;
    T body;
    ResponseError error;
}
