package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.charts.PcdWeekChartData;
import com.akveo.bundlejava.model.PcdWeek;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PcdWeekRepository extends JpaRepository<PcdWeek,Long> {
    public List<PcdWeek> findByYear(Long year);
    public List<PcdWeek> findByAtelier(String atelier);
    public List<PcdWeek> findByAtelierAndYear(String atelier, Long year);
    public PcdWeek findByAtelierAndYearAndWeek(String atelier, Long year , Long Week);
}
