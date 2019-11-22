package org.easypay.easypay.bean;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "CLIENTE")
public class Cliente implements Serializable {

    String id;
    String pin;
    @Id
    String token;
    String nome;
    Integer budget;
}
