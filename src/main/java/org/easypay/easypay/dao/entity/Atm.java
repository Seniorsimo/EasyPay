/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.dao.entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.SuperBuilder;

/**
 *
 * @author simo
 */
@Data
@Entity
@SuperBuilder
@AllArgsConstructor
@RequiredArgsConstructor
public class Atm implements Serializable {

    @Id
    @GeneratedValue
    private long id;

}
