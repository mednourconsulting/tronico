package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.DashboardFrag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DashboardFragRepository extends JpaRepository<DashboardFrag, Long> {
    public List<DashboardFrag> findByWeekAndAtelier(Long week, String atelier);

    public DashboardFrag findDashboardFragByAtelierAndYearAndWeek(String atelier, Long year, Long week);

    public List<DashboardFrag> findByYear(Long year);

}
