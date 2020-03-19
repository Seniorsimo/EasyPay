package org.easypay.easypay.dao.entity;

import io.swagger.annotations.ApiModelProperty;
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
    @ApiModelProperty(
            position = 10,
            required = true,
            value = "Client firstname"
    )
    private String nome;
    @NotBlank
    @ApiModelProperty(
            position = 11,
            required = true,
            value = "Client lastname"
    )
    private String cognome;
    @NotBlank
    @ApiModelProperty(
            position = 12,
            required = true,
            value = "Client fiscal code"
    )
    private String cf;

    @Builder
    public Cliente(String username, String pin, String nome, String cognome, String cf) {
        super(username, pin);
        this.nome = nome;
        this.cognome = cognome;
        this.cf = cf;
    }

}
