/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;
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
    @ApiModelProperty(
            position = 0,
            required = true,
            readOnly = true,
            value = "The database generated user ID"
    )
    private long id;
    @Column(unique = true, nullable = false)
    @ApiModelProperty(
            position = 1,
            required = true,
            value = "The login credential"
    )
    private String username;
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
    @ApiModelProperty(
            position = 97,
            required = true,
            readOnly = true,
            value = "The creation date"
    )
    private Date createdAt;
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    @ApiModelProperty(
            position = 98,
            required = true,
            readOnly = true,
            value = "Last modification date"
    )
    private Date updatedAt;

    @JsonProperty("type")
    @ApiModelProperty(
            position = 99,
            required = true,
            value = "Account type: can be 'cliente' or 'commerciante'"
    )
    private String type() {
        return this instanceof Cliente ? "cliente"
                : this instanceof Commerciante ? "commerciante"
                        : "sconosciuto";
    }

    public Utente(String username, String pin) {
        this.username = username;
        this.pin = pin;
    }

}
