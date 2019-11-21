package org.easypay.easypay.bean;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class ResponseError {
    String id;
    String message;
}