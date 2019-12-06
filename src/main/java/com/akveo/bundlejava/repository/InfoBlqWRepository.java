package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.InfoBlqW;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InfoBlqWRepository extends JpaRepository<InfoBlqW,Long> {
    public List<InfoBlqW> findByWeekBetween(Long w1, Long w2);
    public List<InfoBlqW> findByAtelierAndYear(String atelier, Long year);
    public List<InfoBlqW> findByAtelierAndYearAndWeek(String atelier, Long year ,  Long week);
}
