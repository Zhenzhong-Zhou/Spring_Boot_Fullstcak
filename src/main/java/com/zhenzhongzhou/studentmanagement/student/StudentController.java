package com.zhenzhongzhou.studentmanagement.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

import static com.zhenzhongzhou.studentmanagement.student.Gender.FEMALE;
import static com.zhenzhongzhou.studentmanagement.student.Gender.MALE;

@RestController
@RequestMapping(path = "api/v1/students")
public class StudentController {
    @GetMapping
    public List<Student> getAllStudents() {
        List<Student> students = Arrays.asList(
                new Student(
                        1L,
                        "b",
                        "b@gamil.com",
                        MALE
                ),
                new Student(
                        2L,
                        "C1",
                        "c@gamil.com",
                        FEMALE
                )
        );
        return students;
    }
}
