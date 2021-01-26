/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import javax.validation.Valid;
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
@Tag(name = "Authentication", description = "Controller used for authentication")
public class LoginController {

    @Autowired
    private UserAuthenticationService authenticationService;

    @PostMapping(
            value = "/login",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    @Operation(
            summary = "Grant access to the rest api",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    required = true,
                    content = @Content(
                            schema = @Schema(
                                    implementation = PublicEndpointsController.LoginForm.class
                            )
                    )
            )
    )
    @ApiResponses(
            value = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Successfully logged in",
                        content = @Content(
                                schema = @Schema(
                                        implementation = LoginResponse.class)))
                ,
                @ApiResponse(
                        responseCode = "401",
                        description = "Bad credential",
                        content = @Content)
            })
    public ResponseEntity<LoginResponse> login(
            @RequestBody @Valid PublicEndpointsController.LoginForm form) {
        try {
            String token = authenticationService.login(form.getEmail(), form.getPassword());
            return ResponseEntity.ok(LoginResponse.builder()
                    .token(token)
                    .build());
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/logout")
    @Operation(summary = "Close access to the rest api")
    @ApiResponses(
            value = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Successfully logged out",
                        content = @Content)
                ,
                @ApiResponse(
                        responseCode = "401",
                        description = "Already not logged",
                        content = @Content)
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
    @Schema
    @Builder
    @AllArgsConstructor
    @RequiredArgsConstructor
    public static class LoginResponse {

        @Schema(description = "The authentication token")
        private String token;
    }
}
