package com.akveo.bundlejava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Calendar;

@Entity
public class OtdW implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private Long week;
    private Double otdRealise;
    private Double objectif;
    private Double ecart;

    public OtdW() {
    }

    public OtdW(Long year, Long week, Double otdRealise, Double objectif, Double ecart) {
        this.year = year;
        this.week = week;
        this.otdRealise = otdRealise;
        this.objectif = objectif;
        this.ecart = ecart;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Double getOtdRealise() {
        return otdRealise;
    }

    public void setOtdRealise(Double otdRealise) {
        this.otdRealise = otdRealise;
    }

    public Double getObjectif() {
        return objectif;
    }

    public void setObjectif(Double objectif) {
        this.objectif = objectif;
    }

    public Double getEcart() {
        return ecart;
    }

    public void setEcart(Double ecart) {
        this.ecart = ecart;
    }
}
