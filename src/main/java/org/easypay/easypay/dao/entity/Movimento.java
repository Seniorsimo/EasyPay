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
import java.time.LocalDateTime;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import lombok.*;

/**
 *
 * @author simo
 */
@Entity
@ToString
@Schema(
        description = "A user transaction",
        subTypes = {Pagamento.class, Ricarica.class}
)
@RequiredArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Movimento implements Serializable {

    @Id
    @Getter
    @Setter
    @GeneratedValue
    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The transaction internal identifier"
    )
    private long id;

    @Getter
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name = "from_id")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Conto from;

    @JsonProperty("from")
    @ToString.Include
    @EqualsAndHashCode.Include
    @Schema(
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The transaction origin account identifier"
    )
    public Long getFromId() {
        return from != null ? from.getId() : null;
    }

    @JsonProperty("from_name")
    @Schema(
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The transaction origin account description"
    )
    public String getFromName() {
        return from != null ? from.getUtente().getMovementName() : null;
    }

    public void setFrom(Conto from) {
        if (sameAsFrom(from)) {
            return;
        }
        this.from = from;
        if (this.from != null) {
            this.from.addMovimento(this, Conto.Direction.OUT);
        }
    }

    @Getter
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name = "to_id")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Conto to;

    @JsonProperty("to")
    @ToString.Include
    @EqualsAndHashCode.Include
    @Schema(
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The transaction destination account identifier"
    )
    public Long getToId() {
        return to != null ? to.getId() : null;
    }

    @JsonProperty("to_name")
    @Schema(
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The transaction destination account description"
    )
    public String getToName() {
        return to != null ? to.getUtente().getMovementName() : null;
    }

    @JsonProperty("type")
    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The transaction type"
    )
    public abstract String getType();

    public void setTo(Conto to) {
        if (sameAsTo(to)) {
            return;
        }
//        Conto oldTo = this.to;
        this.to = to;
//        if (oldTo != null) {
//            oldTo.removeMovimento(this, Conto.Direction.IN);
//        }
        if (this.to != null) {
            this.to.addMovimento(this, Conto.Direction.IN);
        }
    }

    @Getter
    @Setter
    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "The transaction amount"
    )
    private float valore;

    @NotNull
    @Getter
    @Setter
    private LocalDateTime timestamp;

    public Movimento(Conto from, Conto to, float valore) {
        this.from = from;
        this.to = to;
        this.valore = valore;
        this.timestamp = LocalDateTime.now();
        if (this.from != null) {
            this.from.addMovimento(this, Conto.Direction.OUT);
        }
        if (this.to != null) {
            this.to.addMovimento(this, Conto.Direction.IN);
        }
    }

    private boolean sameAsFrom(Conto from) {
        return this.from == null ? from == null : this.from.equals(from);
    }

    private boolean sameAsTo(Conto to) {
        return this.to == null ? to == null : this.to.equals(to);
    }
}
