package com.akveo.bundlejava.repository;


import com.akveo.bundlejava.model.ProductionMensuel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductionMensuelRepository extends JpaRepository<ProductionMensuel,Long> {
    public List<ProductionMensuel> findByYear(Long year);
    public List<ProductionMensuel> findByAtelierAndYear(String atelier, Long year);

}
