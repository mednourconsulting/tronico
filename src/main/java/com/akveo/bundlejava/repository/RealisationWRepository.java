package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.RealisationW;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RealisationWRepository extends JpaRepository<RealisationW,Long> {
    public List<RealisationW> findByYear(Long year);
    public List<RealisationW> findByAtelierAndYear(String atelier, Long year);
    public List<RealisationW> findByAtelierAndYearAndWeek(String atelier, Long year, Long week);


}
