package org.easypay.easypay.dao.entity;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Entity(name = "Commerciante")
@RequiredArgsConstructor
public class Commerciante extends Utente {

    @NotBlank
    private String ragSoc;
    @NotBlank
    private String pIva;

    @Builder
    public Commerciante(String ragSoc, String pin, String pIva) {
        super(pin);
        this.ragSoc = ragSoc;
        this.pIva = pIva;
    }

}
