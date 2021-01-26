/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.easypay.easypay.controller.ErrorHandlingController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.OrRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

/**
 *
 * @author simo
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private static final RequestMatcher PUBLIC_URLS = new OrRequestMatcher(
            //            new AntPathRequestMatcher("/api/**"),
            new AntPathRequestMatcher("/css/**"),
            new AntPathRequestMatcher("/images/**"),
            new AntPathRequestMatcher("/img/**"),
            new AntPathRequestMatcher("/js/**"),
            new AntPathRequestMatcher("/"),
            new AntPathRequestMatcher("/api-docs"),
            new AntPathRequestMatcher("/api-docs/**"),
            new AntPathRequestMatcher("/swagger-ui"),
            new AntPathRequestMatcher("/swagger-ui/**"),
            new AntPathRequestMatcher("/swagger-resources/**"),
            //            new AntPathRequestMatcher("/webjars/springfox-swagger-ui/**"),
            new AntPathRequestMatcher("/demo"),
            new AntPathRequestMatcher("/atm"),
            new AntPathRequestMatcher("/atm/"),
            new AntPathRequestMatcher("/atm/**"),
            new AntPathRequestMatcher("/online"),
            new AntPathRequestMatcher("/online/"),
            new AntPathRequestMatcher("/online/**"),
            new AntPathRequestMatcher("/favicon.ico"),
            new AntPathRequestMatcher("/error"),
            new AntPathRequestMatcher("/map"),
            new AntPathRequestMatcher("/register"),
            new AntPathRequestMatcher("/api/login"),
            new AntPathRequestMatcher("/api/clienti", HttpMethod.POST.name()),
            new AntPathRequestMatcher("/login")
    );
    private static final RequestMatcher API_URLS = new OrRequestMatcher(
            new AntPathRequestMatcher("/api/**"),
            new AntPathRequestMatcher("/logout")
    );

    @Autowired
    private TokenAuthenticationProvider authenticationProvider;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(authenticationProvider);
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().requestMatchers(PUBLIC_URLS);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .exceptionHandling()
                .defaultAuthenticationEntryPointFor(forbiddenEntryPoint(), API_URLS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(restAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                .requestMatchers(PUBLIC_URLS).permitAll()
                .anyRequest().authenticated()
                .and()
                .csrf().disable()
                .formLogin().disable()
                .httpBasic().disable()
                .logout().disable();
    }

    @Bean
    public BasicAuthenticationFilter restAuthenticationFilter() throws Exception {
        BasicAuthenticationFilter filter = new TokenAuthenticationFilter(authenticationManager());
        return filter;
    }

    @Bean
    public AuthenticationEntryPoint forbiddenEntryPoint() {
        return (request, response, authException) -> {
            response.setContentType("application/json;charset=UTF-8");
            response.setStatus(HttpStatus.FORBIDDEN.value());
            ErrorHandlingController.Error error = ErrorHandlingController.Error.builder()
                    .type("UNAUTHORIZED")
                    .message(authException != null ? authException.getMessage() : "You are not authorized to this request")
                    .build();
            ObjectMapper mapper = new ObjectMapper();
            response.getWriter().write(mapper.writeValueAsString(error));
        };
//        return new HttpStatusEntryPoint(HttpStatus.FORBIDDEN);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
