/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.projection;

import org.easypay.easypay.dao.entity.Commerciante;

/**
 *
 * @author simo
 */
public class CommercianteView extends ClienteView {

    public String ragSoc;
    public String pIva;

    public CommercianteView(Commerciante c) {
        super(c);
        this.ragSoc = c.getRagSoc();
        this.pIva = c.getPIva();
    }

}
