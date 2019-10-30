package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.Week;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface WeekRepository extends JpaRepository<Week, Long> {
    public List<Week> findByYear(Long year);
}
