package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.ParetoOtdW;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParetoOtdWRepository extends JpaRepository<ParetoOtdW,Long> {
}
