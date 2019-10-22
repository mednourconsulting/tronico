package com.akveo.bundlejava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Calendar;

@Entity
public class RealisationW implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private Long week = 0L;
    private Long heuresRealise = 0L;
    private Long objectif = 0L;
    private Long ecart = 0L;
    private String atelier;

    public RealisationW(Long year, Long week, Long heuresRealise, Long objectif, Long ecart, String atelier) {
        this.year = year;
        this.week = week;
        this.heuresRealise = heuresRealise;
        this.objectif = objectif;
        this.ecart = ecart;
        this.atelier = atelier;
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

    public Long getHeuresRealise() {
        return heuresRealise;
    }

    public void setHeuresRealise(Long heuresRealise) {
        this.heuresRealise = heuresRealise;
    }

    public Long getObjectif() {
        return objectif;
    }

    public void setObjectif(Long objectif) {
        this.objectif = objectif;
    }

    public Long getEcart() {
        return ecart;
    }

    public void setEcart(Long ecart) {
        this.ecart = ecart;
    }

    public String getAtelier() {
        return atelier;
    }

    public void setAtelier(String atelier) {
        this.atelier = atelier;
    }

    @Override
    public String toString() {
        return "RealisationW{" +
                "id=" + id +
                ", year=" + year +
                ", week=" + week +
                ", heuresRealise=" + heuresRealise +
                ", objectif=" + objectif +
                ", ecart=" + ecart +
                ", atelier='" + atelier + '\'' +
                '}';
    }
}
