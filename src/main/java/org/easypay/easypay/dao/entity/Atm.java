/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
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
public class Atm implements Serializable {

    @Id
    @GeneratedValue
    @EqualsAndHashCode.Include
    private long id;

    @OneToMany(
            mappedBy = "atm",
            fetch = FetchType.LAZY
    )
    @ToString.Exclude
    private Set<Ricarica> ricariche;

    void addRicarica(Ricarica ricarica) {
        Set<Ricarica> ricariche = this.getRicariche();
        if (ricariche == null) {
            ricariche = new HashSet<>();
            this.setRicariche(ricariche);
        }
        this.getRicariche().add(ricarica);
    }

}
