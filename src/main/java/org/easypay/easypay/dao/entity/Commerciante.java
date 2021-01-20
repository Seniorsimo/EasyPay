package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.Transient;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@Entity(name = "Commerciante")
@EqualsAndHashCode(callSuper = true)
public class Commerciante extends Cliente {

//    @NotBlank
    @ApiModelProperty(
            position = 10,
            required = true,
            value = "Business name"
    )
    private String ragSoc;

//    @NotBlank
    @ApiModelProperty(
            position = 11,
            required = true,
            value = "VAT number"
    )
    private String pIva;

    @Override
    public String type() {
        return "commerciante";
    }

    @Override
    @Transient
    @JsonIgnore
    public String getMovementName() {
        return this.ragSoc;
    }

    @Builder
    public Commerciante(String username, String password, String nome, String cognome, String cf, LocalDate birthDate, String phone, String address, String ragSoc, String pIva) {
        super(username, password, nome, cognome, cf, birthDate, phone, address);
        this.ragSoc = ragSoc;
        this.pIva = pIva;
    }

    public static class CommercianteBuilder extends ClienteBuilder {
    }

}
