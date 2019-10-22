package com.akveo.bundlejava.model;

import javax.persistence.*;
import java.io.Serializable;


@Entity
public class ParetoWeek implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String produit;
    private Double ecartCarte=0D;
    private Double ecart=0D;
    private String raison;
    private String atelier;

    @Override
    public String toString() {
        return "ParetoWeek{" +
                "id=" + id +
                ", produit='" + produit + '\'' +
                ", ecartCarte=" + ecartCarte +
                ", ecart=" + ecart +
                ", raison='" + raison + '\'' +
                ", atelier='" + atelier + '\'' +
                '}';
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

    public Double getEcartCarte() {
        return ecartCarte;
    }

    public void setEcartCarte(Double ecartCarte) {
        this.ecartCarte = ecartCarte;
    }

    public Double getEcart() {
        return ecart;
    }

    public void setEcart(Double ecart) {
        this.ecart = ecart;
    }

    public String getRaison() {
        return raison;
    }

    public void setRaison(String raison) {
        this.raison = raison;
    }

    public String getAtelier() {
        return atelier;
    }

    public void setAtelier(String atelier) {
        this.atelier = atelier;
    }

    public ParetoWeek(String produit, Double ecartCarte, Double ecart, String raison, String atelier) {
        this.produit = produit;
        this.ecartCarte = ecartCarte;
        this.ecart = ecart;
        this.raison = raison;
        this.atelier = atelier;
    }
}
