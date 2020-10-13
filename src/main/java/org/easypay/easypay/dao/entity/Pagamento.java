/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Arrays;
import javax.persistence.Entity;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

/**
 *
 * @author simo
 */
@Data
@Entity
public class Pagamento extends Movimento {

    @ToString.Include
    @JsonProperty("id_conto_mittente")
    public long getMittenteId() {
        return getMittente().getId();
    }

    @JsonIgnore
    public Conto getMittente() {
        return getConti().get(0);
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
    public Pagamento(Conto from, Conto to, int value) {
        super(from != null && to != null ? Arrays.asList(from, to) : null, value);
    }
}
