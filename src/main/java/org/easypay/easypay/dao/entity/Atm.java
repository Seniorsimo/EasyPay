/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import lombok.*;

/**
 *
 * @author simo
 */
@Data
@Entity
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Schema(description = "A ATM that support the service")
public class Atm implements Serializable {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "atm_id_sequence"
    )
    @SequenceGenerator(
            name = "atm_id_sequence",
            allocationSize = 1
    )
    @EqualsAndHashCode.Include
    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The ATM internal identifier"
    )
    private long id;

    @OneToMany(
            mappedBy = "atm",
            fetch = FetchType.LAZY
    )
    @JsonIgnore
    @ToString.Exclude
    @OrderBy(value = "timestamp desc")
    private List<Ricarica> ricariche;

    void addRicarica(Ricarica ricarica) {
        List<Ricarica> ricariche = this.getRicariche();
        if (ricariche == null) {
            ricariche = new ArrayList<>();
            this.setRicariche(ricariche);
        }
        if (ricariche.contains(ricarica)) {
            return;
        }
        this.getRicariche().add(ricarica);
        ricarica.setAtm(this);
    }

}
