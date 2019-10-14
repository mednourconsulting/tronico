package com.akveo.bundlejava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class PcdWeek implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year;
    private Long week;
    private Long objectifEuro;
    private Long objectifQte;
    private Long pcdEuro;
    private Long pcdQte;
    private Long ecartEuro;
    private Long ecartQte;

    public PcdWeek() {
    }

    public PcdWeek(Long year, Long week, Long objectifEuro, Long objectifQte, Long pcdEuro, Long pcdQte, Long ecartEuro, Long ecartQte) {
        this.year = year;
        this.week = week;
        this.objectifEuro = objectifEuro;
        this.objectifQte = objectifQte;
        this.pcdEuro = pcdEuro;
        this.pcdQte = pcdQte;
        this.ecartEuro = ecartEuro;
        this.ecartQte = ecartQte;
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

    public Long getPcdEuro() {
        return pcdEuro;
    }

    public void setPcdEuro(Long pcdEuro) {
        this.pcdEuro = pcdEuro;
    }

    public Long getPcdQte() {
        return pcdQte;
    }

    public void setPcdQte(Long pcdQte) {
        this.pcdQte = pcdQte;
    }

    public Long getEcartEuro() {
        return ecartEuro;
    }

    public void setEcartEuro(Long ecartEuro) {
        this.ecartEuro = ecartEuro;
    }

    public Long getEcartQte() {
        return ecartQte;
    }

    public void setEcartQte(Long ecartQte) {
        this.ecartQte = ecartQte;
    }

    @Override
    public String toString() {
        return "PcdWeek{" +
                "id=" + id +
                ", year=" + year +
                ", week=" + week +
                ", objectifEuro=" + objectifEuro +
                ", objectifQte=" + objectifQte +
                ", pcdEuro=" + pcdEuro +
                ", pcdQte=" + pcdQte +
                ", ecartEuro=" + ecartEuro +
                ", ecartQte=" + ecartQte +
                '}';
    }
}
