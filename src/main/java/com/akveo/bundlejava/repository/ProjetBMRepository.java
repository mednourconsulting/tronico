package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.ProjetBM;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjetBMRepository extends JpaRepository<ProjetBM, Long> {
    public List<ProjetBM> findByYearAndStartsAtBetween(Long year, Long w1, Long w2);
}
