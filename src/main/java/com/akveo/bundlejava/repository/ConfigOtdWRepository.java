package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.ConfigOtdW;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConfigOtdWRepository extends JpaRepository<ConfigOtdW,Long> {
}
