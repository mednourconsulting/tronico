package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.Employe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeRepository extends JpaRepository<Employe, Long> {
}
