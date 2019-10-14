package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.PlanActPcd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanActPcdRepository extends JpaRepository<PlanActPcd,Long> {
}
