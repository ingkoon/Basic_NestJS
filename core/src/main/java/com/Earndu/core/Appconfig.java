package com.Earndu.core;


import com.Earndu.core.student.StudentRepository;
import com.Earndu.core.student.StudentRepositoryMysql;
import com.Earndu.core.student.StudentService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Appconfig {

    @Bean
    public StudentRepository studentRepository(){
        return new StudentRepositoryMysql();
    }
}
