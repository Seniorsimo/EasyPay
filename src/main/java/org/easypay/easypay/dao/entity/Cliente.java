package org.easypay.easypay.dao.entity;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Entity(name = "Cliente")
@RequiredArgsConstructor
public class Cliente extends Utente {

    @NotBlank
    private String nome;
    @NotBlank
    private String cognome;
    @NotBlank
    private String cf;

    @Builder
    public Cliente(String nome, String cognome, String pin, String cf) {
        super(pin);
        this.nome = nome;
        this.cognome = cognome;
        this.cf = cf;
    }

}
