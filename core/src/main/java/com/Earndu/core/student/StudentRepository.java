package com.Earndu.core.student;

public interface StudentRepository {
    void save(Student student);
    void findByemail(Long email);

}
