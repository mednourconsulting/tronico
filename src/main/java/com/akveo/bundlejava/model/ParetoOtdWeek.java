package com.akveo.bundlejava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Calendar;


@Entity
public class ParetoOtdWeek implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private Long week=0L;
    private Long bjectif=0L;
    private Long realise=0L;
    private Long ecart=0L;

    public ParetoOtdWeek() {
    }

    public ParetoOtdWeek(Long year, Long week, Long bjectif, Long realise, Long ecart) {
        this.year = year;
        this.week = week;
        this.bjectif = bjectif;
        this.realise = realise;
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

    public Long getBjectif() {
        return bjectif;
    }

    public void setBjectif(Long bjectif) {
        this.bjectif = bjectif;
    }

    public Long getRealise() {
        return realise;
    }

    public void setRealise(Long realise) {
        this.realise = realise;
    }

    public Long getEcart() {
        return ecart;
    }

    public void setEcart(Long ecart) {
        this.ecart = ecart;
    }

    @Override
    public String toString() {
        return "ParetoOtdWeek{" +
                "id=" + id +
                ", year=" + year +
                ", week=" + week +
                ", bjectif=" + bjectif +
                ", realise=" + realise +
                ", ecart=" + ecart +
                '}';
    }
}
