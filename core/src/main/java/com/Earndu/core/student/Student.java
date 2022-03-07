package com.Earndu.core.student;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

// 학생의 정보를 담는 도메인
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String username;
    @Column
    private String password;
    @Column
    private String fullname;
    @Column
    private String email;
    @Column
    private Date bitrhday;
    @Column
    private String account;
}
