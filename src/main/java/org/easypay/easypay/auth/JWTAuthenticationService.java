/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.auth;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import org.easypay.easypay.dao.repository.UtenteRepository;
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
    private UtenteRepository utenteRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String login(String username, String password) throws BadCredentialsException {
        return utenteRepository
                .findByUsername(username)
                .filter(user -> passwordEncoder.matches(password, user.getPin()))
                .map(user -> {
                    String token = jwtService.create(username);
                    user.setToken(token);
                    utenteRepository.save(user);
                    return user.getToken();
                })
                .orElseThrow(() -> new BadCredentialsException("Invalid username or password."));
    }

    @Override
    public User authenticateByToken(String token) {
        try {
            Object username = jwtService.verify(token).get("username");
            return Optional.ofNullable(username)
                    .flatMap(name -> utenteRepository.findByUsername(String.valueOf(name)))
                    .filter(u -> token.equals(u.getToken()))
                    .map(u -> {
                        Collection<GrantedAuthority> authorities = new HashSet<>();
                        authorities.add(new SimpleGrantedAuthority("ROLE_" + "user"));
                        MyUser user = new MyUser(u.getUsername(), u.getPin(),
                                true, true, true, true,
                                authorities, u.getId());
                        return user;
                    })
                    .orElseThrow(() -> new UsernameNotFoundException("User '" + username + "' not found."));
        } catch (JWTService.TokenVerificationException e) {
            throw new BadCredentialsException("Invalid JWT token.", e);
        }
    }

    @Override
    public void logout(String username) {
        utenteRepository.findByUsername(username)
                .ifPresent(u -> {
                    u.setToken(null);
                    utenteRepository.save(u);
                });
    }

}
