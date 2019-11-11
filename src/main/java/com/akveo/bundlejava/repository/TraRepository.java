package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.Tra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TraRepository extends JpaRepository<Tra, Long> {
    public Tra findTraByYearAndWeekAndAtelier(Long year, Long week, String atelier);
}
