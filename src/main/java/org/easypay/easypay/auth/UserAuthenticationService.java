/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.auth;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;

/**
 *
 * @author simo
 */
public interface UserAuthenticationService {

    String login(String username, String password) throws BadCredentialsException;

    User authenticateByToken(String token) throws AuthenticationException;

    void logout(String username);
}
