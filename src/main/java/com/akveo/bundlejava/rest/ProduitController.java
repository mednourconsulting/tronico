package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.Produit;
import com.akveo.bundlejava.repository.ProduitRepository;
import com.akveo.bundlejava.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produit")
@CrossOrigin("*")
public class ProduitController {
    @Autowired
    private  ProduitRepository produitRepository;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<Produit>> getAll(){
        return ResponseEntity.ok(produitRepository.findAll());
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getByProduit/{produit}")
    public ResponseEntity<List<Produit>> getByProduit(@PathVariable("produit") String produit){
        return ResponseEntity.ok(produitRepository.getAllByProduit( produit));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getById/{id}")
    public ResponseEntity<Produit> getById(@PathVariable("id") Long id){
        return ResponseEntity.ok(produitRepository.findById(id).orElse(null));
    }
}
