package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.WeekMonth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeekMonthRepository extends JpaRepository<WeekMonth, Long> {


}
