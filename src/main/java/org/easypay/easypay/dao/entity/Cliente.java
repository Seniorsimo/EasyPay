package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Data
@RequiredArgsConstructor
@Entity(name = "Cliente")
@EntityListeners(AuditingEntityListener.class)
@Inheritance(strategy = InheritanceType.JOINED)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, allowGetters = true)
public class Cliente implements Serializable {

    @Id
    @GeneratedValue
    @ApiModelProperty(
            position = 0,
            required = true,
            readOnly = true,
            value = "The database generated user ID"
    )
    private long id;

    @OneToOne(
            fetch = FetchType.LAZY,
            mappedBy = "cliente",
            orphanRemoval = true,
            cascade = CascadeType.ALL
    )
    @JsonIgnore
    @ToString.Exclude
    private Credenziali credenziali;

    @NotBlank
    @ApiModelProperty(
            position = 10,
            required = true,
            value = "Client firstname"
    )
    private String nome;
    @NotBlank
    @ApiModelProperty(
            position = 11,
            required = true,
            value = "Client lastname"
    )
    private String cognome;
    @NotBlank
    @ApiModelProperty(
            position = 12,
            required = true,
            value = "Client fiscal code"
    )
    private String cf;
    @OneToOne(
            fetch = FetchType.LAZY,
            mappedBy = "utente"
    )
    @JsonIgnore
    private Conto conto;

    @JsonProperty("id_conto")
    private long getContoId() {
        return this.conto.getId();
    }

    @JsonProperty("type")
    @ApiModelProperty(
            position = 99,
            required = true,
            value = "Account type: can be 'cliente' or 'commerciante'"
    )
    public String type() {
        return "cliente";
    }

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

    @Builder
    public Cliente(String username, String password, String nome, String cognome, String cf) {
        this.nome = nome;
        this.cognome = cognome;
        this.cf = cf;
        this.credenziali = Credenziali.builder()
                .cliente(this)
                .username(username)
                .password(password)
                .build();
    }

}
