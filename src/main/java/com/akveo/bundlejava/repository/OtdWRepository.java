package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.OtdW;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OtdWRepository extends JpaRepository<OtdW,Long> {
}
