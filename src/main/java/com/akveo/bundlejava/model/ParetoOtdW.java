package com.akveo.bundlejava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Calendar;

@Entity
public class ParetoOtdW implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year;
    private Long week;
    private String faitMq;
    private String sujetSupport;
    private String qui;
    private String bloquantEuro;
    private String actManees;
    private String delai; // [s1,s2] ou RAS
    private Double tauxAbst;
    private String escalader;
    private String abstRaison;

    public ParetoOtdW() {
    }

    public ParetoOtdW(Long year, Long week, String faitMq, String sujetSupport, String qui, String bloquantEuro, String actManees, String delai, Double tauxAbst, String escalader, String abstRaison) {
        this.year = year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
        this.week = week;
        this.faitMq = faitMq;
        this.sujetSupport = sujetSupport;
        this.qui = qui;
        this.bloquantEuro = bloquantEuro;
        this.actManees = actManees;
        this.delai = delai;
        this.tauxAbst = tauxAbst;
        this.escalader = escalader;
        this.abstRaison = abstRaison;
    }

    public ParetoOtdW(Long year) {
        this.year = year;
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

    public String getFaitMq() {
        return faitMq;
    }

    public void setFaitMq(String faitMq) {
        this.faitMq = faitMq;
    }

    public String getSujetSupport() {
        return sujetSupport;
    }

    public void setSujetSupport(String sujetSupport) {
        this.sujetSupport = sujetSupport;
    }

    public String getQui() {
        return qui;
    }

    public void setQui(String qui) {
        this.qui = qui;
    }

    public String getBloquantEuro() {
        return bloquantEuro;
    }

    public void setBloquantEuro(String bloquantEuro) {
        this.bloquantEuro = bloquantEuro;
    }

    public String getActManees() {
        return actManees;
    }

    public void setActManees(String actManees) {
        this.actManees = actManees;
    }

    public String getDelai() {
        return delai;
    }

    public void setDelai(String delai) {
        this.delai = delai;
    }

    public Double getTauxAbst() {
        return tauxAbst;
    }

    public void setTauxAbst(Double tauxAbst) {
        this.tauxAbst = tauxAbst;
    }

    public String getEscalader() {
        return escalader;
    }

    public void setEscalader(String escalader) {
        this.escalader = escalader;
    }

    public String getAbstRaison() {
        return abstRaison;
    }

    public void setAbstRaison(String abstRaison) {
        this.abstRaison = abstRaison;
    }

    @Override
    public String toString() {
        return "ParetoOtdW{" +
                "id=" + id +
                ", year=" + year +
                ", week=" + week +
                ", faitMq='" + faitMq + '\'' +
                ", sujetSupport='" + sujetSupport + '\'' +
                ", qui='" + qui + '\'' +
                ", bloquantEuro='" + bloquantEuro + '\'' +
                ", actManees='" + actManees + '\'' +
                ", delai='" + delai + '\'' +
                ", tauxAbst=" + tauxAbst +
                ", escalader='" + escalader + '\'' +
                ", abstRaison='" + abstRaison + '\'' +
                '}';
    }
}
