/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.bankunito.bankunito.config;

import java.io.IOException;
import javax.servlet.ServletException;
import org.aopalliance.intercept.MethodInvocation;
import org.apache.log4j.Logger;
import org.bankunito.bankunito.bean.CustomAuthenticationProvider;
import org.bankunito.bankunito.bean.CustomMethodSecurityExpressionRoot;
import org.bankunito.bankunito.bean.MySQLSessionRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.expression.SecurityExpressionRoot;
import org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionOperations;
import org.springframework.security.authentication.AuthenticationTrustResolver;
import org.springframework.security.authentication.AuthenticationTrustResolverImpl;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.GlobalMethodSecurityConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.security.web.access.expression.DefaultWebSecurityExpressionHandler;
import org.springframework.security.web.session.SessionInformationExpiredEvent;
import org.springframework.security.web.session.SessionInformationExpiredStrategy;
import org.springframework.session.web.http.SessionRepositoryFilter;
import org.springframework.util.Assert;

/**
 *
 * @author simo
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    public final Logger LOG = Logger.getLogger(this.getClass().getName());

    @Autowired
    private CustomAuthenticationProvider authProvider;

    @Autowired
    private SessionRepositoryFilter repFilter;

    @Autowired
    private MySQLSessionRegistry sessionRegistry;

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(authProvider)
                .passwordEncoder(encoder());
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        CustomWebSecurotyExpressionHandler webSecurityExpressionHandler = new CustomWebSecurotyExpressionHandler();
        web.ignoring()
                .antMatchers("/css/**",
                        "/css_old/**",
                        "/style/**",
                        "/images/**",
                        "/sound/**",
                        "/fonts/**",
                        "/img/**",
                        "/js/**",
                        "/jquery/**")
                .and()
                .expressionHandler(webSecurityExpressionHandler);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.addFilterAfter(repFilter, ChannelProcessingFilter.class)
                .authorizeRequests()
                .antMatchers("/css/**",
                        "/css_old/**",
                        "/style/**",
                        "/images/**",
                        "/sound/**",
                        "/fonts/**",
                        "/img/**",
                        "/js/**",
                        "/jquery/**",
                        "/error",
                        "/login*",
                        "/register*").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin().loginPage("/login").permitAll()
                .usernameParameter("username").passwordParameter("password")
                .successHandler(authProvider.getAsh())
                .and()
                .logout().logoutUrl("/logout").invalidateHttpSession(true)
                .logoutSuccessHandler(authProvider.getLsh())
                .permitAll()
                .and()
                .exceptionHandling().accessDeniedPage("/error")
                .and()
                .csrf().ignoringAntMatchers("/**")
                .and()
                .sessionManagement()
                .maximumSessions(-1)
                .sessionRegistry(sessionRegistry)
                .expiredSessionStrategy(new SessionInformationExpiredStrategy() {
                    @Override
                    public void onExpiredSessionDetected(SessionInformationExpiredEvent event) throws IOException, ServletException {
                        event.getResponse().sendRedirect(event.getRequest().getContextPath() + "/login");
                    }
                });
    }

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

}

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
class SecurityConfig extends GlobalMethodSecurityConfiguration {

    @Autowired
    private ApplicationContext applicationContext;

    @Override
    protected MethodSecurityExpressionHandler createExpressionHandler() {

        DefaultMethodSecurityExpressionHandler expressionHandler = new CustomMethodSecurityExpressionHandler();
//        expressionHandler.setPermissionEvaluator(new CustomPermissionEvaluator());
        expressionHandler.setApplicationContext(applicationContext);

        return expressionHandler;
    }
}

class CustomMethodSecurityExpressionHandler extends DefaultMethodSecurityExpressionHandler {

    @Override
    protected MethodSecurityExpressionOperations createSecurityExpressionRoot(Authentication authentication, MethodInvocation invocation) {
        CustomMethodSecurityExpressionRoot root = new CustomMethodSecurityExpressionRoot(authentication);
        root.setThis(invocation.getThis());
        root.setPermissionEvaluator(getPermissionEvaluator());
        root.setTrustResolver(getTrustResolver());
        root.setRoleHierarchy(getRoleHierarchy());
        root.setDefaultRolePrefix(getDefaultRolePrefix());
        return root;
    }
}

class CustomWebSecurotyExpressionHandler extends DefaultWebSecurityExpressionHandler {

    private AuthenticationTrustResolver trustResolver = new AuthenticationTrustResolverImpl();
    private String defaultRolePrefix = "ROLE_";

    @Override
    protected SecurityExpressionRoot createSecurityExpressionRoot(
            Authentication authentication, FilterInvocation fi) {
        SecurityExpressionRoot root = new CustomMethodSecurityExpressionRoot(authentication, fi);
        root.setPermissionEvaluator(getPermissionEvaluator());
        root.setTrustResolver(getTrustResolver());
        root.setRoleHierarchy(getRoleHierarchy());
        root.setDefaultRolePrefix(getDefaultRolePrefix());
        return root;
    }

    @Override
    public void setTrustResolver(AuthenticationTrustResolver trustResolver) {
        Assert.notNull(trustResolver, "trustResolver cannot be null");
        this.trustResolver = trustResolver;
    }

    protected AuthenticationTrustResolver getTrustResolver() {
        return trustResolver;
    }

    @Override
    public void setDefaultRolePrefix(String defaultRolePrefix) {
        this.defaultRolePrefix = defaultRolePrefix;
    }

    protected String getDefaultRolePrefix() {
        return defaultRolePrefix;
    }

}