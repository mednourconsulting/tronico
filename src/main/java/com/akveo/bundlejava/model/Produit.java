package com.akveo.bundlejava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Produit  implements Serializable {
    @Id
    @GeneratedValue (strategy =  GenerationType.IDENTITY)
    private Long id;
    private String produit;

    public Produit() {
    }

    public Produit(String produit) {
        this.produit = produit;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProduit() {
        return produit;
    }

    public void setProduit(String produit) {
        this.produit = produit;
    }
}
