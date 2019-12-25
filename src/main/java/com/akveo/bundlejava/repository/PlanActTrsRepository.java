package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.PlanActTrs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanActTrsRepository extends JpaRepository<PlanActTrs,Long> {
    public List<PlanActTrs> findByYearOrderByWeek( Long year);
    public List<PlanActTrs> findByYearAndWeekOrderByWeek ( Long year, Long week);

}
