/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.projection;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import org.easypay.easypay.dao.entity.Cliente;

/**
 *
 * @author simo
 */
@Schema(description = "A compact view of a user")
public class ClienteView {

    @Schema(
            required = true,
            accessMode = Schema.AccessMode.READ_ONLY,
            description = "Client identifier"
    )
    public long id;
    @Schema(
            required = true,
            description = "Client firstname"
    )
    public String nome;
    @Schema(
            required = true,
            description = "Client lastname"
    )
    public String cognome;
    @JsonProperty("id_conto")
    @Schema(
            required = true,
            description = "Client's account identifier"
    )
    public long conto;
    @Schema(
            required = true,
            description = "Account type: can be 'cliente' or 'commerciante'"
    )
    public String type;

    public ClienteView(Cliente c) {
        this.id = c.getId();
        this.nome = c.getNome();
        this.cognome = c.getCognome();
        this.conto = c.getConto().getId();
        this.type = c.type();
    }

}
