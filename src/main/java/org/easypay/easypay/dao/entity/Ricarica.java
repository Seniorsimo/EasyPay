/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.SuperBuilder;

/**
 *
 * @author simo
 */
@Data
@Entity
@SuperBuilder
@AllArgsConstructor
@RequiredArgsConstructor
public class Ricarica extends Movimento {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_atm")
    private Atm atm;
}
