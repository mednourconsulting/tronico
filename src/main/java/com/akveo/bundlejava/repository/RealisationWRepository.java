package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.RealisationW;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RealisationWRepository extends JpaRepository<RealisationW,Long> {
}
