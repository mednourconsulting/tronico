package com.akveo.bundlejava.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.io.Serializable;


@Entity
public class ParetoOtdWeekItem implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(cascade=CascadeType.ALL)
    private Produit produit;
    private Double ecartCarte=0D;
    private Double ecart=0D;
    private String raison;
    private String atelier;
    @ManyToOne
    @JsonIgnore
    private ParetoOtdWeek paretoOtdWeek;

    public ParetoOtdWeekItem() {
    }

    public ParetoOtdWeekItem(Produit produit, Double ecartCarte, Double ecart, String raison, String atelier, ParetoOtdWeek paretoOtdWeek) {
        this.produit = produit;
        this.ecartCarte = ecartCarte;
        this.ecart = ecart;
        this.raison = raison;
        this.atelier = atelier;

        this.paretoOtdWeek = paretoOtdWeek;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Produit getProduit() {
        return produit;
    }

    public void setProduit(Produit produit) {
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

    public ParetoOtdWeek getParetoOtdWeek() {
        return paretoOtdWeek;
    }

    public void setParetoOtdWeek(ParetoOtdWeek paretoOtdWeek) {
        this.paretoOtdWeek = paretoOtdWeek;
    }

    @Override
    public String toString() {
        return "ParetoOtdWeekItem{" +
                "id=" + id +
                ", produit=" + produit +
                ", ecartCarte=" + ecartCarte +
                ", ecart=" + ecart +
                ", raison='" + raison + '\'' +
                ", atelier='" + atelier + '\'' +
                ", paretoOtdWeek=" + paretoOtdWeek +
                '}';
    }
}
