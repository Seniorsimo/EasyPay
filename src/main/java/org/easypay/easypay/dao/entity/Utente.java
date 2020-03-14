/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

/**
 *
 * @author simo
 */
@Data
@Entity
@RequiredArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Inheritance(strategy = InheritanceType.JOINED)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, allowGetters = true)
public abstract class Utente implements Serializable {

    @Id
    @GeneratedValue
    private long id;
    @NotBlank
    @JsonIgnore
    private String pin;
    @JsonIgnore
    private String token;
    @OneToOne(
            fetch = FetchType.LAZY,
            mappedBy = "utente"
    )
    @JsonIgnore
    private Conto conto;
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date createdAt;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date updatedAt;

    @JsonProperty("type")
    private String type() {
        return this instanceof Cliente ? "cliente"
                : this instanceof Commerciante ? "commerciante"
                        : "sconosciuto";
    }

    public Utente(String pin) {
        this.pin = pin;
    }

}
