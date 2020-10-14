/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Arrays;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 *
 * @author simo
 */
@Data
@Entity
public class Ricarica extends Movimento {

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_atm")
    @JsonIgnore
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Atm atm;

    @JsonProperty("id_atm")
    @ToString.Include
    public long getAtmId() {
        return this.atm.getId();
    }

    @ToString.Include
    @JsonProperty("id_conto_destinatario")
    public long getDestinatarioId() {
        return getDestinatario().getId();
    }

    @JsonIgnore
    public Conto getDestinatario() {
        return getConti().get(1);
    }

    @Builder
    public Ricarica(Conto destinatario, Atm atm, int valore) {
        super(destinatario != null ? Arrays.asList(destinatario) : null, valore);
        Objects.requireNonNull(atm, "atm cannot be null");
        this.atm = atm;
        atm.addRicarica(this);
    }
}
