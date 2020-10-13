/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.auth;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

/**
 *
 * @author simo
 */
public class TokenAuthenticationFilter extends BasicAuthenticationFilter {

    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";

    public TokenAuthenticationFilter(AuthenticationManager authManager) {
        super(authManager);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest req,
            HttpServletResponse res,
            FilterChain chain) throws IOException, ServletException {
        String token = req.getHeader(AUTHORIZATION);
        if (token == null) {
            chain.doFilter(req, res);
            return;
        }
        if (token.startsWith(BEARER)) {
            token = token.replace(BEARER, "").trim();
        }
        try {
            Authentication auth = getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(token, token));
            if (auth != null) {
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        } catch (AuthenticationException e) {
            //disently discard it
        }
        chain.doFilter(req, res);
    }

}
