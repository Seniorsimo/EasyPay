/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.projection;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.easypay.easypay.dao.entity.Cliente;

/**
 *
 * @author simo
 */
@ApiModel(value = "Client", description = "Client representation")
public class ClienteView {

    @ApiModelProperty(
            position = 0,
            required = true,
            readOnly = true,
            value = "Client identifier"
    )
    public long id;
    @ApiModelProperty(
            position = 10,
            required = true,
            value = "Client firstname"
    )
    public String nome;
    @ApiModelProperty(
            position = 11,
            required = true,
            value = "Client lastname"
    )
    public String cognome;
    @JsonProperty("id_conto")
    @ApiModelProperty(
            position = 80,
            required = true,
            value = "Client's account identifier"
    )
    public long conto;
    @ApiModelProperty(
            position = 99,
            required = true,
            value = "Account type: can be 'cliente' or 'commerciante'"
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
