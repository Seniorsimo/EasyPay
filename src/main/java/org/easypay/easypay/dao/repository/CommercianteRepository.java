/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.repository;

import com.vividsolutions.jts.geom.Geometry;
import java.util.List;
import org.easypay.easypay.dao.entity.Commerciante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author simo
 */
@Repository
public interface CommercianteRepository extends JpaRepository<Commerciante, Long> {

    @Query("SELECT c1, c2 FROM Commerciante c1 LEFT JOIN Cliente c2 ON c1.id = c2.id WHERE ST_within(c1.point, :geom) = true")
    public List<Commerciante> findByPointIsWithin(@Param("geom") Geometry geom);
//
//    public Optional<Cliente> findByUsername(String username);
}
