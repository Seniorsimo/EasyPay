/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.auth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import java.time.Instant;
import java.util.Date;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

/**
 *
 * @author simo
 */
@Service
public class JWTService {

    private Algorithm algorithm;
    private int defaultExpiration;

    public JWTService(/*
            @Value("jwt.secret") String secret,
            @Value("${jwt.defaultExpirationMillis}") int defaultExpirationMillis*/) {
        this.algorithm = Algorithm.HMAC256("S3creT");
        this.defaultExpiration = 7200000;
    }

    public String create(String username) {
        Instant issuedAt = Instant.now();
        return JWT.create()
                .withIssuedAt(Date.from(issuedAt))
                .withExpiresAt(Date.from(issuedAt.plusSeconds(defaultExpiration)))
                .withClaim("username", username)
                .sign(algorithm);
    }

    public Map<String, Object> verify(String token) throws TokenVerificationException {
        JWTVerifier verifier = JWT.require(algorithm)
                .build();
        try {
            DecodedJWT jwt = verifier.verify(token);
            return jwt.getClaims().entrySet()
                    .stream()
                    .collect(Collectors.toMap(e -> e.getKey(), e -> e.getValue().as(Object.class)));
        } catch (Exception e) {
            throw new TokenVerificationException(e);
        }
    }

    public static class TokenVerificationException extends RuntimeException {

        public TokenVerificationException(Throwable t) {
            super(t);
        }
    }
}
