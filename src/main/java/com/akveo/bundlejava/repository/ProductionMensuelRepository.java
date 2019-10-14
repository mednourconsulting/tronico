package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.ProductionMensuel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductionMensuelRepository extends JpaRepository<ProductionMensuel,Long> {
}
