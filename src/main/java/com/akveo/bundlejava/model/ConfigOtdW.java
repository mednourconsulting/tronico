package com.akveo.bundlejava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Calendar;

@Entity
public class ConfigOtdW implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year =Long.valueOf(Calendar.getInstance().get(Calendar.YEAR)) ;
    private String atelier;
    private Long objectifEuro = Long.valueOf(0);
    private Long objectifQte = Long.valueOf(0);

    public ConfigOtdW() {
    }

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAtelier() {
        return atelier;
    }

    public void setAtelier(String atelier) {
        this.atelier = atelier;
    }

    public Long getObjectifEuro() {
        return objectifEuro;
    }

    public void setObjectifEuro(Long objectifEuro) {
        this.objectifEuro = objectifEuro;
    }

    public Long getObjectifQte() {
        return objectifQte;
    }

    public void setObjectifQte(Long objectifQte) {
        this.objectifQte = objectifQte;
    }

    @Override
    public String toString() {
        return "ConfigOtdW{" +
                "id=" + id +
                ", atelier='" + atelier + '\'' +
                ", objectifEuro=" + objectifEuro +
                ", objectifQte=" + objectifQte +
                '}';
    }
}
