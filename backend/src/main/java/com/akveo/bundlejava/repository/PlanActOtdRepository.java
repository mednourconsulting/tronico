package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.PlanActOtd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanActOtdRepository extends JpaRepository<PlanActOtd,Long> {
    public List<PlanActOtd> findByAtelierAndYearOrderByWeek(String atelier, Long year);
    public List<PlanActOtd> findByAtelierOrderByWeek(String atelier);
    public List<PlanActOtd> findByAtelierAndYearAndWeek(String atelier, Long year, Long week);


}