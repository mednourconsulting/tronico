package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.OtdW;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OtdWRepository extends JpaRepository<OtdW,Long> {
    public List<OtdW> findByAtelierAndYearOrderByWeek(String atelier, Long year);
    public List<OtdW> findByAtelierAndYearAndWeek(String atelier, Long year, Long Week);
}
