/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.bankunito.bankunito.dao.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Type;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

/**
 *
 * @author simo
 */
@Data
@Entity
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "spring_session", indexes = {
        @Index(columnList = "username", name = "user_username_hidx")
})
public class SpringSession {
    
    @Id
    private String id;

    @Column(nullable = false, updatable = false)
    private Long creationTime;
    
    @Column
    @LastModifiedDate
    private Long lastAccessed;
    
    @Column
    @Min(0)
    private Integer maxInactiveIntervalInSeconds;
    
    @Lob
    @Column( length = 100000 )
    private String attributes;
    
    @Column
    private String username;
}
