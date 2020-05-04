/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.repository;

import java.util.Optional;
import org.easypay.easypay.dao.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author simo
 */
@Repository
public interface ClientRepository extends JpaRepository<Cliente, Long> {

    public Optional<Cliente> findByToken(String token);

    public Optional<Cliente> findByUsername(String username);
}
