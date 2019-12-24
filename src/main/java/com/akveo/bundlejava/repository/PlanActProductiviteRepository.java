package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.PlanActProductivite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanActProductiviteRepository extends JpaRepository<PlanActProductivite,Long> {
    public List<PlanActProductivite> findByAtelierAndYear(String atelier, Long year);
    public List<PlanActProductivite> findByAtelier(String atelier);
    public List<PlanActProductivite> findByAtelierAndYearAndMonth(String atelier, Long year , Long month);
}
