/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.auth;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import org.easypay.easypay.dao.repository.CredenzialiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 *
 * @author simo
 */
@Service
public class JWTAuthenticationService implements UserAuthenticationService {

    @Autowired
    private JWTService jwtService;
    @Autowired
    private CredenzialiRepository credenzialiRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String login(String username, String password) throws BadCredentialsException {
        return credenzialiRepository
                .findByUsername(username)
                .filter(c -> passwordEncoder.matches(password, c.getPassword()))
                .map(c -> {
                    String token = jwtService.create(username);
                    c.setToken(token);
                    credenzialiRepository.save(c);
                    return c.getToken();
                })
                .orElseThrow(() -> new BadCredentialsException("Invalid username or password."));
    }

    @Override
    public User authenticateByToken(String token) {
        try {
            Object username = jwtService.verify(token).get("username");
            return Optional.ofNullable(username)
                    .flatMap(name -> credenzialiRepository.findByUsername(String.valueOf(name)))
                    .filter(c -> token.equals(c.getToken()))
                    .map(c -> {
                        Collection<GrantedAuthority> authorities = new HashSet<>();
                        authorities.add(new SimpleGrantedAuthority("ROLE_" + "user"));
                        MyUser user = new MyUser(c.getUsername(), c.getPassword(),
                                true, true, true, true,
                                authorities, c.getCliente().getId());
                        return user;
                    })
                    .orElseThrow(() -> new UsernameNotFoundException("User '" + username + "' not found."));
        } catch (JWTService.TokenVerificationException e) {
            throw new BadCredentialsException("Invalid JWT token.", e);
        }
    }

    @Override
    public void logout(String username) {
        credenzialiRepository.findByUsername(username)
                .ifPresent(c -> {
                    c.setToken(null);
                    credenzialiRepository.save(c);
                });
    }

}
