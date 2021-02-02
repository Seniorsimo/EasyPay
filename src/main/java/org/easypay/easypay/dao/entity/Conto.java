/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import lombok.*;
import org.easypay.easypay.dao.exception.InsufficientFundsException;
import org.easypay.easypay.dao.exception.OutOfBudgetException;

/**
 *
 * @author simo
 */
@Entity
@ToString
@RequiredArgsConstructor
@Schema(description = "A client's account")
public class Conto implements Serializable {

    public static enum Direction {
        IN,
        OUT
    };

    @Id
    @Getter
    @Setter
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "conti_id_sequence"
    )
    @SequenceGenerator(
            name = "conti_id_sequence",
            allocationSize = 1
    )
    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The account internal identifier"
    )
    private long id;

    @Min(0)
    @Getter
    @Setter
    @Schema(
            required = true,
            description = "The account weekly budget"
    )
    private float budget;

    @Min(0)
    @Getter
    @Setter
    @Schema(
            required = true,
            description = "The account balance"
    )
    private float saldo;

    @NotNull
    @Getter
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_cliente")
    @JsonIgnore
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Cliente utente;

    @JsonProperty("id_cliente")
    @ToString.Include
    @EqualsAndHashCode.Include
    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The account's client"
    )
    public long getIdCliente() {
        return utente.getId();
    }

    @OneToMany(
            mappedBy = "from",
            cascade = {CascadeType.MERGE, CascadeType.PERSIST},
            fetch = FetchType.LAZY
    )
    @OrderBy(value = "timestamp desc")
    @JsonIgnore
    @ToString.Exclude
    private List<Movimento> uscite = new ArrayList<>();

    public List<Movimento> getUscite() {
        return new ArrayList<>(uscite);
    }

    @OneToMany(
            mappedBy = "to",
            cascade = {CascadeType.MERGE, CascadeType.PERSIST},
            fetch = FetchType.LAZY
    )
    @OrderBy(value = "timestamp desc")
    @JsonIgnore
    @ToString.Exclude
    private List<Movimento> entrate = new ArrayList<>();

    public List<Movimento> getEntrate() {
        return new ArrayList<>(entrate);
    }

    @JsonIgnore
    @Transient
    public List<Movimento> getMovimenti() {
        return Stream.concat(entrate.stream(), uscite.stream())
                .sorted((a, b) -> b.getTimestamp().compareTo(a.getTimestamp()))
                .collect(Collectors.toList());
    }

    @Transient
    public float getAvailableBudget() {
        return (float) (this.budget - this.getUscite().stream()
                .mapToDouble(u -> u.getValore())
                .sum());
    }

    public void addMovimento(@NotNull Movimento movimento, @NotNull Direction direction) {
        switch (direction) {
            case IN:
                if (this.entrate.contains(movimento)) {
                    return;
                }
                this.saldo += movimento.getValore();
                this.entrate.add(0, movimento);
                movimento.setTo(this);
                break;
            case OUT:
                if (this.uscite.contains(movimento)) {
                    return;
                }
                if (saldo < movimento.getValore()) {
                    throw new InsufficientFundsException(utente.getId());
                }
                if (this.budget > 0 && getAvailableBudget() < movimento.getValore()) {
                    throw new OutOfBudgetException(utente.getId());
                }
                this.saldo -= movimento.getValore();
                this.uscite.add(0, movimento);
                movimento.setFrom(this);
                break;
        }
    }

    @Builder
    public Conto(int budget, int saldo, Cliente cliente) {
        Objects.requireNonNull(cliente, "cliente cannot be null");
        this.budget = budget;
        this.saldo = saldo;
        this.utente = cliente;
    }

}
