package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.ParetoOtdWeek;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ParetoOtdWeekRepository extends JpaRepository<ParetoOtdWeek,Long> {
    public List<ParetoOtdWeek> findByAtelierAndYear(String atelier, Long year);
    public List<ParetoOtdWeek> findByAtelierAndYearAndWeek(String atelier, Long year, Long week);
    public Optional<ParetoOtdWeek> findById(Long id);

}
