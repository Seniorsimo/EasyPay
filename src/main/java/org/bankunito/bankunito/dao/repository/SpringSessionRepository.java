/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.bankunito.bankunito.dao.repository;

import java.util.List;
import org.bankunito.bankunito.dao.model.SpringSession;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author simo
 */
public interface SpringSessionRepository extends JpaRepository<SpringSession, String>{
    
    public List<SpringSession> findAllByUsername(String username);
}
