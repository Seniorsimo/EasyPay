package org.easypay.easypay.dao.entity;

import io.swagger.annotations.ApiModelProperty;
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
    @ApiModelProperty(
            position = 10,
            required = true,
            value = "Business name"
    )
    private String ragSoc;
    @NotBlank
    @ApiModelProperty(
            position = 11,
            required = true,
            value = "VAT number"
    )
    private String pIva;

    @Builder
    public Commerciante(String username, String pin, String ragSoc, String pIva) {
        super(username, pin);
        this.ragSoc = ragSoc;
        this.pIva = pIva;
    }

}
