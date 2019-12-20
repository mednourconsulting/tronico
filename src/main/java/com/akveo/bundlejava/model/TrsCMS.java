package com.akveo.bundlejava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Calendar;

@Entity
public class TrsCMS implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private Long week = 0L;
    private Double trsRealise = 0D;// en %
    private Double objectif = 0D;// en %
    private Double ecart = 0D;// en %

    public TrsCMS() {
    }

    @Override
    public String toString() {
        return "TrsCMS{" +
                "id=" + id +
                ", year=" + year +
                ", week=" + week +
                ", trsRealise=" + trsRealise +
                ", objectif=" + objectif +
                ", ecart=" + ecart +
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

    public Double getTrsRealise() {
        return trsRealise;
    }

    public void setTrsRealise(Double trsRealise) {
        this.trsRealise = trsRealise;
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
