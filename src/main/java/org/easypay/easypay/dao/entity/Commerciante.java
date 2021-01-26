package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
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
@Schema(description = "A company user of the service")
public class Commerciante extends Cliente {

//    @NotBlank
    @Schema(
            required = true,
            description = "Business name"
    )
    private String ragSoc;

//    @NotBlank
    @Schema(
            required = true,
            description = "VAT number"
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
