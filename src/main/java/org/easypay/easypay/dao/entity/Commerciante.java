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
    public Commerciante(String username, String pin, String ragSoc, String pIva) {
        super(username, pin);
        this.ragSoc = ragSoc;
        this.pIva = pIva;
    }

}
