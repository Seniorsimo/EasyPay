/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.projection;

import io.swagger.v3.oas.annotations.media.Schema;
import org.easypay.easypay.dao.entity.Commerciante;

/**
 *
 * @author simo
 */
@Schema(description = "A compact view of a company user")
public class CommercianteView extends ClienteView {

    @Schema(
            required = true,
            description = "Compani name"
    )
    public String ragSoc;
    @Schema(
            required = true,
            description = "Company VAT"
    )
    public String pIva;

    public CommercianteView(Commerciante c) {
        super(c);
        this.ragSoc = c.getRagSoc();
        this.pIva = c.getPIva();
    }

}
