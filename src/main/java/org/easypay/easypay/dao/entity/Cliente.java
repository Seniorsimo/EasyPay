package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import java.util.Random;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.HibernateException;
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
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "client_id_sequence"
    )
    @SequenceGenerator(
            name = "client_id_sequence",
            allocationSize = 1
    )
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

    @Column
    @NotBlank
    private String otp;

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
    @NotNull
    @OneToOne(
            fetch = FetchType.LAZY,
            mappedBy = "utente",
            cascade = {CascadeType.MERGE, CascadeType.PERSIST}
    )
    @JsonIgnore
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Conto conto;

    @JsonProperty("id_conto")
    @ToString.Include
    @EqualsAndHashCode.Include
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

    @Transient
    @JsonIgnore
    public String getMovementName() {
        return this.cognome + ' ' + this.nome;
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
        Objects.requireNonNull(nome, "nome cannot be null");
        Objects.requireNonNull(cognome, "cognome cannot be null");
        Objects.requireNonNull(cf, "cf cannot be null");
        this.credenziali = Credenziali.builder()
                .cliente(this)
                .username(username.toLowerCase())
                .password(password)
                .build();
        this.nome = nome;
        this.cognome = cognome;
        this.cf = cf;
        this.otp = OtpGenerator.generate();
        this.conto = Conto.builder()
                .cliente(this)
                .budget(20)
                .saldo(0)
                .build();
    }

    public static class OtpGenerator {

        private static final char[] CHARACTERS = new char[]{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
        private static final int SIZE = 6;
        private static final Random randomizer = new Random();

        public static String generate() throws HibernateException {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < SIZE; i++) {
                sb.append(CHARACTERS[randomizer.nextInt(CHARACTERS.length)]);
            }
            return sb.toString();
        }
    }

}
