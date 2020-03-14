/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.repository;

import org.easypay.easypay.dao.entity.Movimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author simo
 */
@Repository
public interface MovimentoRepository extends JpaRepository<Movimento, Long> {

//    public List<Utente> findAllByToken(String token);
}
