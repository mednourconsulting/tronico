package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.PcdWeek;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PcdWeekRepository extends JpaRepository<PcdWeek,Long> {
}
