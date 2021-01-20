/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.auth;

import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author simo
 */
@RestController
public class PublicEndpointsController {

    @Autowired
    private UserAuthenticationService authenticationService;

    @PostMapping(value = "/login",
            consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<String> login(
            @RequestParam("username") String username,
            @RequestParam("password") String password) {
        try {
            return ResponseEntity.ok(authenticationService.login(username, password));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(e.getMessage());
        }
    }

    @PostMapping(value = "/login",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<String> login(
            @RequestBody LoginForm form) {
        try {
            return ResponseEntity.ok(authenticationService.login(form.email, form.password));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(e.getMessage());
        }
    }

    @PostMapping("/logout")
    public ResponseEntity logout() {
        try {
            User u = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            authenticationService.logout(u.getUsername());
            return ResponseEntity.ok().build();
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @Data
    @AllArgsConstructor
    @RequiredArgsConstructor
    public static class LoginForm {

        @NotBlank
        private String email;

        @NotBlank
        private String password;
    }
}
