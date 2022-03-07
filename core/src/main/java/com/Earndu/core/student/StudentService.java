package com.Earndu.core.student;

public interface StudentService {
    void join(Student student);
    Student findStudent(Long email);

}
