/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

/**
 *
 * @author simo
 */
@Data
@Entity
@RequiredArgsConstructor
public class Conto implements Serializable {

    @Id
    @GeneratedValue
    private long id;
    @Min(0)
    private int budget;
    @Min(0)
    private int saldo;
    @NotNull
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_utente")
    private Utente utente;
    @OneToMany(
            mappedBy = "conto",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY
    )
    private List<Movimento> movimenti;

    @Builder
    public Conto(int budget, int saldo, Utente utente) {
        this.budget = budget;
        this.saldo = saldo;
        this.utente = utente;
    }

}
