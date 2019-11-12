/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.bankunito.bankunito.bean;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import org.apache.log4j.Logger;
import org.bankunito.bankunito.dao.model.SpringSession;
import org.bankunito.bankunito.dao.repository.SpringSessionRepository;
import org.springframework.core.serializer.support.DeserializingConverter;
import org.springframework.core.serializer.support.SerializingConverter;
import org.springframework.expression.Expression;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.session.ExpiringSession;
import org.springframework.session.FindByIndexNameSessionRepository;
import org.springframework.session.MapSession;
import org.springframework.session.Session;
import org.springframework.util.Assert;
import org.springframework.util.Base64Utils;

/**
 *
 * @author simo
 */
public class MySQLSessionRepository implements FindByIndexNameSessionRepository<MySQLSessionRepository.MySQLHttpSession> {

    private static final Logger LOG = Logger.getLogger(MySQLSessionRepository.class);
    private static final PrincipalNameResolver PRINCIPAL_NAME_RESOLVER = new PrincipalNameResolver();

    /**
     * Default name of the cassandra table used to store sessions.
     */
    public static final String DEFAULT_TABLE_NAME = "spring_session";

    //Temporary until #557 is resolved, see commends on PrincipalNameResolver
    private static final String SPRING_SECURITY_CONTEXT = "SPRING_SECURITY_CONTEXT";

    private final SpringSessionRepository springSessionRepository;
    private final SessionAttributeConverter sessionAttrConverter = new SessionAttributeConverter();

    /**
     * The default number of seconds a {@link CassandraHttpSession} session will
     * be valid.
     */
    private int defaultMaxInactiveInterval = MapSession.DEFAULT_MAX_INACTIVE_INTERVAL_SECONDS;

    /**
     * The name of cassandra table used by Spring Session to store sessions.
     */
    private String tableName = DEFAULT_TABLE_NAME;

    public MySQLSessionRepository(SpringSessionRepository springSessionRepository) {
        this.springSessionRepository = springSessionRepository;
        LOG.debug("created!!!!");
    }

    @Override
    public MySQLHttpSession createSession() {
        MySQLHttpSession cassandraHttpSession = new MySQLHttpSession();
        cassandraHttpSession.setMaxInactiveIntervalInSeconds(this.defaultMaxInactiveInterval);
        return cassandraHttpSession;
    }

    public int getDefaultMaxInactiveInterval() {
        return this.defaultMaxInactiveInterval;
    }

    public void setDefaultMaxInactiveInterval(int defaultMaxInactiveInterval) {
        this.defaultMaxInactiveInterval = defaultMaxInactiveInterval;
    }

    /**
     * Set the name of cassandra table used to store sessions.
     *
     * @param tableName the cassandra table name
     */
    public void setTableName(String tableName) {
        Assert.hasText(tableName, "Table name must not be empty");
        this.tableName = tableName.trim();
    }

    public String getTableName() {
        return this.tableName;
    }

    public String getIndexTableName() {
        return this.tableName + "_by_name";
    }

    @Override
    public void save(MySQLHttpSession session) {
        LOG.debug("saving session...");
        int ttl;
        try {
            int secondsSinceAccess = (int) TimeUnit.MILLISECONDS.toSeconds(System.currentTimeMillis() - session.getLastAccessedTime());
            ttl = session.getMaxInactiveIntervalInSeconds() - secondsSinceAccess;
            if (ttl <= 0) {
                throw new IllegalArgumentException("Session has already expired");
            }
        } catch (IllegalArgumentException e) {
            LOG.info("Session has already expired, skipping save");
            return;
        }

        String serializedAttributes = this.sessionAttrConverter.convert(session);
        
        SpringSession springSession = SpringSession.builder()
                        .id(session.getId())
                        .creationTime(session.getCreationTime())
                        .lastAccessed(session.getLastAccessedTime())
                        .maxInactiveIntervalInSeconds(session.getMaxInactiveIntervalInSeconds())
                        .attributes(serializedAttributes)
                        .build();
        
        if (session.getSavedPrincipalName() != null) {
            springSession.setUsername(session.getCurrentPrincipalName());
        }

        springSessionRepository.save(springSession);
        session.onSave();
    }

    @Override
    public MySQLHttpSession getSession(String id) {
        LOG.debug("loading session...");
        SpringSession springSession = springSessionRepository.findById(id).orElse(null);
        return toMySQLSession(springSession);
    }

    @Override
    public void delete(String id) {
        MySQLHttpSession session = getSession(id);
        springSessionRepository.deleteById(id);
    }

    @Override
    public Map<String, MySQLHttpSession> findByIndexNameAndIndexValue(String indexName, String indexValue) {
        
        Map<String, MySQLHttpSession> result = new HashMap<>();
        List<SpringSession> sessions = springSessionRepository.findAllByUsername(indexValue);
        sessions.forEach(s -> {
            MySQLHttpSession session = toMySQLSession(s);
            if (session != null) {
                result.put(session.getId(), session);
            }
        });
        return result;
    }
    
    private MySQLHttpSession toMySQLSession(SpringSession springSession){
        if (springSession == null) {
            return null;
        }
        long creationTime = springSession.getCreationTime();
        long lastAccessed = springSession.getLastAccessed();
        int maxInactiveIntervalInSeconds = springSession.getMaxInactiveIntervalInSeconds();

        String attributes = springSession.getAttributes();
        MySQLHttpSession result = new MySQLHttpSession(springSession.getId());
        result.setCreationTime(creationTime);
        result.setLastAccessedTime(lastAccessed);
        result.setMaxInactiveIntervalInSeconds(maxInactiveIntervalInSeconds);
        this.sessionAttrConverter.inflateSession(attributes, result);
        result.onSave();
        return result;
    }

    /**
     * Implementation of ExpiringSession which primarily delegates to a
     * {@link MapSession}. Keeps track of the saved and current principal by
     * calling {@link #onMaybeChangedPrincipalName()} when attributes are
     * updated or deleted. This is done so that we know if we need to
     * insert/delete index entries when the session is saved.
     *
     * @author Andrew Fitzgerald
     */
    public static class MySQLHttpSession implements ExpiringSession {

        private String savedPrincipalName = null;
        private String currentPrincipalName = null;
        private final MapSession delegate;

        MySQLHttpSession() {
            this.delegate = new MapSession();
        }

        MySQLHttpSession(String id) {
            this.delegate = new MapSession(id);
        }

        public void onSave() {
            this.savedPrincipalName = this.currentPrincipalName;
        }

        private void onMaybeChangedPrincipalName() {
            this.currentPrincipalName = PRINCIPAL_NAME_RESOLVER.resolvePrincipal(this.delegate);
        }

        public String getSavedPrincipalName() {
            return this.savedPrincipalName;
        }

        public String getCurrentPrincipalName() {
            return this.currentPrincipalName;
        }

        @Override
        public String getId() {
            return this.delegate.getId();
        }

        @Override
        public long getCreationTime() {
            return this.delegate.getCreationTime();
        }

        public void setCreationTime(long creationTime) {
            this.delegate.setCreationTime(creationTime);
        }

        @Override
        public <T> T getAttribute(String attributeName) {
            return this.delegate.getAttribute(attributeName);
        }

        @Override
        public long getLastAccessedTime() {
            return this.delegate.getLastAccessedTime();
        }

        @Override
        public void setLastAccessedTime(long lastAccessedTime) {
            this.delegate.setLastAccessedTime(lastAccessedTime);
        }

        @Override
        public Set<String> getAttributeNames() {
            return this.delegate.getAttributeNames();
        }

        @Override
        public void setAttribute(String attributeName, Object attributeValue) {
            this.delegate.setAttribute(attributeName, attributeValue);
            onMaybeChangedPrincipalName();
        }

        @Override
        public int getMaxInactiveIntervalInSeconds() {
            return this.delegate.getMaxInactiveIntervalInSeconds();
        }

        @Override
        public void setMaxInactiveIntervalInSeconds(int interval) {
            this.delegate.setMaxInactiveIntervalInSeconds(interval);
        }

        @Override
        public void removeAttribute(String attributeName) {
            this.delegate.removeAttribute(attributeName);
            onMaybeChangedPrincipalName();
        }

        @Override
        public boolean isExpired() {
            return this.delegate.isExpired();
        }
    }

    /**
     * Resolves the Spring Security principal name. Copy pasted from
     * ${@link JdbcOperationsSessionRepository} until it is extracted to a
     * common class. https://github.com/spring-projects/spring-session/pull/557
     *
     * @author Vedran Pavic
     */
    public static class PrincipalNameResolver {

        public String resolvePrincipal(Session session) {
            String principalName = session.getAttribute(PRINCIPAL_NAME_INDEX_NAME);
            if (principalName != null) {
                return principalName;
            }
            Object authentication = session.getAttribute(SPRING_SECURITY_CONTEXT);
            if (authentication != null) {
                Expression expression = new SpelExpressionParser()
                        .parseExpression("authentication?.name");
                return expression.getValue(authentication, String.class);
            }
            return null;
        }

    }

    /**
     * Extracts and serializes the attributes from a session into a map.
     *
     * @author Andrew Fitzgerald
     * @see SessionAttributeDeserializer
     */
    private class SessionAttributeConverter {

        private final ObjectSerializer converter = new ObjectSerializer();

        public String convert(Session session) {
            Map<String, String> result = new HashMap<>();
            session.getAttributeNames().forEach((attributeName) -> {
                Object value = session.getAttribute(attributeName);
                String serializedValue = this.converter.serializeToString(value);
                result.put(attributeName, serializedValue);
            });
            return this.converter.serializeToString(result);
        }

        public void inflateSession(String serializedAttributes, Session targetSession) {
            if (serializedAttributes == null) {
                return;
            }
            Map<String, String> map = (Map<String, String>)this.converter.convertToObject(serializedAttributes);
            map.entrySet().stream().filter((entry) -> (entry.getKey() != null && entry.getValue() != null)).forEachOrdered((entry) -> {
                Object deserializedValue = this.converter.convertToObject(entry.getValue());
                targetSession.setAttribute(entry.getKey(), deserializedValue);
            });
        }

        private class ObjectSerializer {

            public String serializeToString(Object object) {
                byte[] data = new SerializingConverter().convert(object);
                return Base64Utils.encodeToString(data);
            }

            public Object convertToObject(String serialized) {
                byte[] data = Base64Utils.decodeFromString(serialized);
                return new DeserializingConverter().convert(data);
            }

        }
    }

}