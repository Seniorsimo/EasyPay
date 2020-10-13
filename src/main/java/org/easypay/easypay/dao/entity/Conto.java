/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import lombok.*;

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
    @JoinColumn(name = "id_cliente")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Cliente utente;

    @JsonProperty("id_cliente")
    @ToString.Include
    @EqualsAndHashCode.Include
    public long getIdCliente() {
        return utente.getId();
    }

    @ManyToMany(
            cascade = {CascadeType.MERGE, CascadeType.PERSIST},
            fetch = FetchType.LAZY
    )
    @JoinTable(
            name = "conto_movimento",
            joinColumns = @JoinColumn(name = "conto_id"),
            inverseJoinColumns = @JoinColumn(name = "movimento_id")
    )
    @ToString.Exclude
    private Set<Movimento> movimenti;

    void addMovimento(Movimento movimento) {
        Set<Movimento> movimenti = this.getMovimenti();
        if (movimenti == null) {
            movimenti = new HashSet<>();
            this.setMovimenti(movimenti);
        }
        movimenti.add(movimento);
    }

    @Builder
    public Conto(int budget, int saldo, Cliente cliente) {
        Objects.requireNonNull(cliente, "cliente cannot be null");
        this.budget = budget;
        this.saldo = saldo;
        this.utente = cliente;
    }

}
