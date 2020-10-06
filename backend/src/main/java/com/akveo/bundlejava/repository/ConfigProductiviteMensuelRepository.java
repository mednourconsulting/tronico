package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.ConfigProductiviteMensuel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConfigProductiviteMensuelRepository extends JpaRepository<ConfigProductiviteMensuel,Long> {
    public ConfigProductiviteMensuel findByYearAndAtelier(Long year, String atelier);

    public void deleteByYear(Long year);

    public void deleteConfigProductiviteMensuelByYearAndAtelier(Long year, String atelier);
}
