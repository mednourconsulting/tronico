package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.ConfigTrs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConfigTrsRepository extends JpaRepository<ConfigTrs,Long> {
    public ConfigTrs findByYear(Long year);
    public ConfigTrs deleteByYear(Long year);
}
