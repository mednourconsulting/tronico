package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.TrsCMS;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrsTrepository extends JpaRepository<TrsCMS,Long> {
    public List<TrsCMS> findByYear(Long year);
}
