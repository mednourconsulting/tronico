package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.ConfigPcdW;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConfigPcdWRepository extends JpaRepository<ConfigPcdW,Long> {
    public ConfigPcdW findByYearAndAtelier(Long year, String atelier);

    public void deleteByYear(Long year);

    public void deleteConfigPcdWByYearAndAtelier(Long year, String atelier);
}
