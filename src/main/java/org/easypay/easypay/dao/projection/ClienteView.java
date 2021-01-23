/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.projection;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.easypay.easypay.dao.entity.Cliente;

/**
 *
 * @author simo
 */
public class ClienteView {

    public long id;
    public String nome;
    public String cognome;
    @JsonProperty("id_conto")
    public long conto;
    public String type;

    public ClienteView(Cliente c) {
        this.id = c.getId();
        this.nome = c.getNome();
        this.cognome = c.getCognome();
        this.conto = c.getConto().getId();
        this.type = c.type();
    }

}
