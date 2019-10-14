package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.PlanActProductivite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanActProductiviteRepository extends JpaRepository<PlanActProductivite,Long> {
}
