package org.easypay.easypay.bean;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.easypay.easypay.dao.exception.NotFoundException;

@Data
@Builder
@AllArgsConstructor
public class ResponseError {
    String id;
    String message;

}