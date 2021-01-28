/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import lombok.*;

/**
 *
 * @author simo
 */
@Data
@Entity
@EqualsAndHashCode(callSuper = true)
@RequiredArgsConstructor
@Schema(description = "A transaction from an ATM to an account")
public class Ricarica extends Movimento {

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_atm")
    @JsonIgnore
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The transaction atm identifier"
    )
    private Atm atm;

    @JsonProperty("id_atm")
    @ToString.Include
    public long getAtmId() {
        return this.atm.getId();
    }

    @Builder
    public Ricarica(@NotNull Conto destinatario, @NotNull Atm atm, float valore) {
        super(null, destinatario, valore);
        Objects.requireNonNull(atm, "atm cannot be null");
        this.atm = atm;
        atm.addRicarica(this);
    }

    @Override
    @JsonProperty("type")
    public String getType() {
        return "ricarica";
    }
}
