package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.TrsCMS;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrsTrepository extends JpaRepository<TrsCMS,Long> {
    public TrsCMS findByYearAndWeek(Long year , Long week);
    public List<TrsCMS> findAllByYearOrderByWeek(Long year);
}
