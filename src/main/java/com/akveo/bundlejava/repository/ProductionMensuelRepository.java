package com.akveo.bundlejava.repository;


import com.akveo.bundlejava.model.ProductionMensuel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductionMensuelRepository extends JpaRepository<ProductionMensuel,Long> {
    public List<ProductionMensuel> findByYearOrderByMonth(Long year);
    public List<ProductionMensuel> findByAtelierAndYearOrderByMonth(String atelier, Long year);
    public ProductionMensuel findByAtelierAndYearAndMonth(String atelier, Long year ,Long month);
    public List<ProductionMensuel> findByAtelierOrderByMonth(String atelier);
}
