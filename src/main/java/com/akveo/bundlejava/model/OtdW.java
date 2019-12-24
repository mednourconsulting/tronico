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
    private Long week = 0L;
    private Double otdRealise = 0D;
    private Double objectif = 0D;
    private Double ecart = 0D;
    private Double ecartEcart = 0D;
    private String atelier;

    public OtdW() { }


    @Override
    public String toString() {
        return "OtdW{" +
                "id=" + id +
                ", year=" + year +
                ", week=" + week +
                ", otdRealise=" + otdRealise +
                ", objectif=" + objectif +
                ", ecart=" + ecart +
                ", atelier='" + atelier + '\'' +
                '}';
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

    public Double getEcartEcart() {
        return ecartEcart;
    }

    public void setEcartEcart(Double ecartEcart) {
        this.ecartEcart = ecartEcart;
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

    public String getAtelier() {
        return atelier;
    }

    public void setAtelier(String atelier) {
        this.atelier = atelier;
    }
}
