/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

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
public class Pagamento extends Movimento {

    @Builder
    public Pagamento(@NotNull Conto from, @NotNull Conto to, float value) {
        super(from, to, value);
    }
}
