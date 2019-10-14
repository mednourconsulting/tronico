package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.Evolutionh;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EvolutionhRepository extends JpaRepository<Evolutionh,Long> {
    public List<Evolutionh> findByYear(Long year);
}
