package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.ParetoOtdWeek;
import com.akveo.bundlejava.model.ParetoOtdWeekItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ParetoOtdWeekItemRepository extends JpaRepository<ParetoOtdWeekItem,Long> {
    public List<ParetoOtdWeekItem> findByParetoOtdWeek(ParetoOtdWeek paretoOtdWeek);
}
