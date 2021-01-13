/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.repository;

import java.util.List;
import org.easypay.easypay.dao.entity.Conto;
import org.easypay.easypay.dao.entity.Movimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author simo
 */
@Repository
public interface MovimentoRepository extends JpaRepository<Movimento, Long> {

    public List<Movimento> findAllByFrom(Conto conto);
//    public List<Utente> findAllByToken(String token);
}
