/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.bankunito.bankunito.bean;

import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpSessionListener;
import org.apache.log4j.Logger;
import org.bankunito.bankunito.dao.repository.SpringSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.session.ExpiringSession;
import org.springframework.session.SessionRepository;
import org.springframework.session.config.annotation.web.http.EnableSpringHttpSession;
import org.springframework.session.web.http.CookieHttpSessionStrategy;
import org.springframework.session.web.http.HttpSessionStrategy;
import org.springframework.session.web.http.MultiHttpSessionStrategy;
import org.springframework.session.web.http.SessionEventHttpSessionListenerAdapter;
import org.springframework.session.web.http.SessionRepositoryFilter;

/**
 *
 * @author simo
 */
@EnableSpringHttpSession
@Configuration
public class SpringHttpSessionConfiguration {

    private static final Logger LOG = Logger.getLogger(SpringHttpSessionConfiguration.class);

    private List<HttpSessionListener> httpSessionListeners = new ArrayList<>();

    @Autowired
    private ServletContext servletContext;

    @Bean
    public HttpSessionStrategy strategy() {
        LOG.debug("creating strategy");
        return new CookieHttpSessionStrategy();
    }

    @Bean
    public MySQLSessionRepository repository(@Autowired SpringSessionRepository springSessionRepository) {
        LOG.debug("getting repy with cOps: " + springSessionRepository);
        MySQLSessionRepository cassandraSessionRepository = new MySQLSessionRepository(springSessionRepository);
        cassandraSessionRepository.setDefaultMaxInactiveInterval(60 * 60);
        return cassandraSessionRepository;
    }

    @Bean
    public MySQLSessionRegistry sessionRegistry(@Autowired MySQLSessionRepository sessionRepository) {
        return new MySQLSessionRegistry(sessionRepository);
    }

    @Bean
    public SessionEventHttpSessionListenerAdapter sessionEventHttpSessionListenerAdapter() {
        LOG.debug("creating adapter");
        return new SessionEventHttpSessionListenerAdapter(this.httpSessionListeners);
    }

    @Bean
    public <S extends ExpiringSession> SessionRepositoryFilter<? extends ExpiringSession> springSessionRepositoryFilter(SessionRepository<S> sessionRepository, HttpSessionStrategy httpSessionStrategy) {
        LOG.debug("creating repo filter with " + sessionRepository + " and " + httpSessionStrategy);
        SessionRepositoryFilter<S> sessionRepositoryFilter = new SessionRepositoryFilter<>(sessionRepository);
        sessionRepositoryFilter.setServletContext(this.servletContext);
        if (httpSessionStrategy instanceof MultiHttpSessionStrategy) {
            sessionRepositoryFilter.setHttpSessionStrategy((MultiHttpSessionStrategy) httpSessionStrategy);
        } else {
            sessionRepositoryFilter.setHttpSessionStrategy(httpSessionStrategy);
        }
        return sessionRepositoryFilter;
    }

    @Autowired(required = false)
    public void setHttpSessionListeners(List<HttpSessionListener> listeners) {
        LOG.debug("setlistener with " + listeners);
        this.httpSessionListeners = listeners;
    }

}
