package org.easypay.easypay.dao.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.Objects;
import java.util.Random;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.*;
import org.easypay.easypay.dao.projection.ClienteView;
import org.easypay.easypay.dao.projection.CommercianteView;
import org.hibernate.HibernateException;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Data
@RequiredArgsConstructor
@Entity(name = "Cliente")
@Schema(
        description = "A user of the service",
        subTypes = Commerciante.class
)
@EntityListeners(AuditingEntityListener.class)
@Inheritance(strategy = InheritanceType.JOINED)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, allowGetters = true)
public class Cliente implements Serializable {

    public static ClienteView getClientView(Cliente c) {
        if (c instanceof Commerciante) {
            return new CommercianteView((Commerciante) c);
        }
        return new ClienteView(c);
    }

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "client_id_sequence"
    )
    @SequenceGenerator(
            name = "client_id_sequence",
            allocationSize = 1
    )
    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The client internal identifier"
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

    @Column
    @NotBlank
    @JsonIgnore
    private String pin;

    @NotBlank
    @Schema(
            required = true,
            description = "Client firstname"
    )
    private String nome;
    @NotBlank
    @Schema(
            required = true,
            description = "Client lastname"
    )
    private String cognome;

    @NotBlank
    @Schema(
            required = true,
            description = "Client fiscal code"
    )
    private String cf;

    @NotNull
    @JsonProperty("birth_date")
    @Schema(
            required = true,
            description = "Client birth date"
    )
    private LocalDate birthDate;

    @NotBlank
    @Schema(
            required = true,
            description = "Client phone number"
    )
    private String phone;

    @NotBlank
    @Schema(
            required = true,
            description = "Client address"
    )
    private String address;

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
    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The client's account identifier"
    )
    private long getContoId() {
        return this.conto.getId();
    }

    @JsonProperty("email")
    @ToString.Include
    @EqualsAndHashCode.Include
    private String getEmail() {
        return this.credenziali.getUsername();
    }

    @JsonProperty("type")
    @Schema(
            required = true,
            description = "Account type: can be 'cliente' or 'commerciante'"
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
    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The creation date"
    )
    private Date createdAt;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "Last modification date"
    )
    private Date updatedAt;

    @Builder
    public Cliente(String username, String password, String nome, String cognome, String cf, LocalDate birthDate, String phone, String address) {
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
        this.otp = OtpGenerator.generate(6);
        this.pin = "1234";
        this.birthDate = birthDate;
        this.phone = phone;
        this.address = address;
        this.conto = Conto.builder()
                .cliente(this)
                .budget(0)
                .saldo(0)
                .build();
    }

    public static class OtpGenerator {

        private static final char[] CHARACTERS = new char[]{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
        private static final Random randomizer = new Random();

        public static String generate(int size) throws HibernateException {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < size; i++) {
                sb.append(CHARACTERS[randomizer.nextInt(CHARACTERS.length)]);
            }
            return sb.toString();
        }
    }

}
