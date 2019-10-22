package com.akveo.bundlejava.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

@Entity
@Table(name = "evolutionh")
public class Evolutionh<string> implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private Long week;
    private Double budjet=0D;
    private Integer heuresCDE = Integer.valueOf(0);
    private Integer heuresPrevus = Integer.valueOf(0);
    private Double facture = Double.valueOf(0);
    private Double ecart= Double.valueOf(0);

    public Evolutionh(Long year, Long week, Double budjet, Integer heuresCDE, Integer heuresPrevus, Double facture, Double ecart) {
        this.year = year;
        this.week = week;
        this.budjet = budjet;
        this.heuresCDE = heuresCDE;
        this.heuresPrevus = heuresPrevus;
        this.facture = facture;
        this.ecart = ecart;
    }

    public Evolutionh() {
    }

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public Long getWeek() {
        return week;
    }

    public void setWeek(Long week) {
        this.week = week;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getBudjet() {
        return budjet;
    }

    public void setBudjet(Double budjet) {
        this.budjet = budjet;
    }

    public Integer getHeuresCDE() {
        return heuresCDE;
    }

    public void setHeuresCDE(Integer heuresCDE) {
        this.heuresCDE = heuresCDE;
    }

    public Integer getHeuresPrevus() {
        return heuresPrevus;
    }

    public void setHeuresPrevus(Integer heuresPrevus) {
        this.heuresPrevus = heuresPrevus;
    }

    public Double getFacture() {
        return facture;
    }

    public void setFacture(Double facture) {
        this.facture = facture;
    }

    public Double getEcart() {
        return ecart;
    }

    public void setEcart(Double ecart) {
        this.ecart = ecart;
    }

    @Override
    public String toString() {
        return "Evolutionh{" +
                "id=" + id +
                ", budjet=" + budjet +
                ", heuresCDE=" + heuresCDE +
                ", heuresPrevus=" + heuresPrevus +
                ", facture=" + facture +
                ", ecart=" + ecart +
                '}';
    }
}
