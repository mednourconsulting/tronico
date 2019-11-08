package com.akveo.bundlejava.repository;
import com.akveo.bundlejava.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProduitRepository extends JpaRepository<Produit,Long> {
    public List<Produit> getAllByProduit(String produit);
}
