/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.controller;

import org.easypay.easypay.auth.JWTAuthenticationService;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 *
 * @author simo
 */
public interface SelfHandlingController {

    public default long getUserId(String id) {
        if ("self".equalsIgnoreCase(id)) {
            JWTAuthenticationService.MyUser u = (JWTAuthenticationService.MyUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            return u != null ? u.getId() : null;
        }
        return Long.parseLong(id);
    }
}
