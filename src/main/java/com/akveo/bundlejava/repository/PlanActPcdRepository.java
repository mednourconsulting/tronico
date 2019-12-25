package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.PlanActPcd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanActPcdRepository extends JpaRepository<PlanActPcd,Long> {
    public List<PlanActPcd> findByAtelierAndYearOrderByWeek(String atelier, Long year);
    public List<PlanActPcd> findByAtelierOrderByWeek(String atelier);
    public List<PlanActPcd> findByAtelierAndYearAndWeek(String atelier, Long year, Long week);
}


