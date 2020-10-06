package com.akveo.bundlejava.model;

import com.fasterxml.jackson.annotation.JsonSetter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;


@Entity
public class ParetoOtdWeek implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private Long week = 0L;
    private Long bjectif = 0L;
    private Long realise = 0L;
    private Long ecart = 0L;
    private String atelier;
    @OneToMany(cascade=CascadeType.ALL)
    List<ParetoOtdWeekItem> paretoOtdWeekItemList = new ArrayList();

    public List<ParetoOtdWeekItem> getParetoOtdWeekItemList() {
        return paretoOtdWeekItemList;
    }
    @JsonSetter
    public void setParetoOtdWeekItemList(List<ParetoOtdWeekItem> paretoOtdWeekItemList) {
        this.paretoOtdWeekItemList = paretoOtdWeekItemList;
    }

    public ParetoOtdWeek() {
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

    public String getAtelier() {
        return atelier;
    }

    public void setAtelier(String atelier) {
        this.atelier = atelier;
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
                ", atelier='" + atelier + '\'' +
                '}';
    }
}
