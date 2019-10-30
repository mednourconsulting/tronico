package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.ParetoOtdWeekItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

@Repository
public interface ParetoOtdWeekItemRepository extends JpaRepository<ParetoOtdWeekItem,Long> {
}
