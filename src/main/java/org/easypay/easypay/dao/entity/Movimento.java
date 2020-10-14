/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;
import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

/**
 *
 * @author simo
 */
@Data
@Entity
@RequiredArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Movimento implements Serializable {

    @Id
    @GeneratedValue
    private long id;

    @NotNull
    @JsonIgnore
    @ManyToMany(mappedBy = "movimenti")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<Conto> conti;

    @Min(1)
    private int valore;

    public Movimento(List<Conto> conti, int valore) {
        Objects.requireNonNull(conti, "conti cannot be null");
        this.conti = conti;
        this.valore = valore;
        conti.forEach(c -> c.addMovimento(this));
    }
}
