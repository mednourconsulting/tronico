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
    private Long week;
    private Long heuresRealise;
    private Long objectif;
    private Long ecart;

    public RealisationW() {
    }

    public RealisationW(Long year, Long week, Long heuresRealise, Long objectif, Long ecart) {
        this.year = year;
        this.week = week;
        this.heuresRealise = heuresRealise;
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

    @Override
    public String toString() {
        return "RealisationW{" +
                "id=" + id +
                ", year=" + year +
                ", week=" + week +
                ", heuresRealise=" + heuresRealise +
                ", objectif=" + objectif +
                ", ecart=" + ecart +
                '}';
    }
}
