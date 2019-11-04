package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.ConfigOtdW;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConfigOtdWRepository extends JpaRepository<ConfigOtdW,Long> {
    // @Modifying
    //@Query("delete from ConfigOtdW c where c.year=:year and c.atelier=:atelier")
    //public void deleteConfigOtdWB(@Param("name") String name, @Param("color") String color);
    public ConfigOtdW findByYearAndAtelier(Long year, String atelier);

    public void deleteByYear(Long year);

    public void deleteConfigOtdWByYearAndAtelier(Long year, String atelier);
}
