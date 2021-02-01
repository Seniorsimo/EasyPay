/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import lombok.Builder;
import lombok.RequiredArgsConstructor;

/**
 *
 * @author simo
 */
@Entity
@RequiredArgsConstructor
@Schema(description = "A transaction between two account")
public class Pagamento extends Movimento {

    @Builder
    public Pagamento(@NotNull Conto from, @NotNull Conto to, float value) {
        super(from, to, value);
    }

    @Override
    @JsonProperty("type")
    public String getType() {
        return "pagamento";
    }

}
