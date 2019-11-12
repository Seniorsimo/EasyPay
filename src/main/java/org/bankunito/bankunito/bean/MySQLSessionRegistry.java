/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.bankunito.bankunito.bean;

import org.springframework.security.core.session.SessionInformation;
import org.springframework.session.security.SpringSessionBackedSessionRegistry;

/**
 *
 * @author simo
 */
public class MySQLSessionRegistry extends SpringSessionBackedSessionRegistry<MySQLSessionRepository.MySQLHttpSession> {

    private final MySQLSessionRepository sessionRepository;

    public MySQLSessionRegistry(MySQLSessionRepository sessionRepository) {
        super(sessionRepository);
        this.sessionRepository = sessionRepository;
    }

    @Override
    public void refreshLastRequest(String sessionId) {
        if (sessionId != null) {
            MySQLSessionRepository.MySQLHttpSession session = this.sessionRepository.getSession(sessionId);
            refreshLastRequest(session);
        }
    }

    public void refreshLastRequest(SessionInformation si) {
        if (si != null) {
            refreshLastRequest(si.getSessionId());
        }
    }

    public void refreshLastRequest(MySQLSessionRepository.MySQLHttpSession session) {
        if (session != null) {
            session.setLastAccessedTime(System.currentTimeMillis());
            this.sessionRepository.save(session);
        }
    }

}

