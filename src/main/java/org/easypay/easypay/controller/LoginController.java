/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.easypay.easypay.auth.PublicEndpointsController;
import org.easypay.easypay.auth.UserAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author simo
 */
@RestController
@RequestMapping("/api")
@Api(value = "Login", description = "Authentication")
public class LoginController {

    @Autowired
    private UserAuthenticationService authenticationService;

    @PostMapping(value = "/login",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "Grant access to the rest api")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully logged in")
        ,
        @ApiResponse(code = 401, message = "Bad credential")
    })
    public ResponseEntity<LoginResponse> login(
            @RequestBody PublicEndpointsController.LoginForm form) {
        try {
            ObjectMapper om = new ObjectMapper();
            return ResponseEntity.ok(LoginResponse.builder()
                    .token(authenticationService.login(form.getUsername(), form.getPassword()))
                    .build());
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//                    .body(e.getMessage());
        }
    }

    @PostMapping("/logout")
    @ApiOperation(value = "Close access to the rest api")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully logged out")
        ,
        @ApiResponse(code = 401, message = "Already not logged")
    })
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
    @Builder
    @AllArgsConstructor
    @RequiredArgsConstructor
    public static class LoginResponse {

        private String token;
    }
}
