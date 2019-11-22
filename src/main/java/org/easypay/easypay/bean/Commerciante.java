package org.easypay.easypay.bean;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "COMMERCIANTE")
public class Commerciante {
    @Id
    String idConto;
    String nome;
    String nomenclatura;
}
