/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.repository;

import java.util.Optional;
import org.easypay.easypay.dao.entity.Credenziali;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author simo
 */
@Repository
public interface CredenzialiRepository extends JpaRepository<Credenziali, String> {

    public Optional<Credenziali> findByToken(String token);
}
