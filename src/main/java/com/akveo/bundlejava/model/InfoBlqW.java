package com.akveo.bundlejava.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Calendar;

@Entity
public class InfoBlqW implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long week;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private String fmq;
    private String sujetSupport;
    private String qui;
    private String bloquantEuro;
    private String actMenees;
    private String delai; // [s1,s2] ou RAS
    private Double tauxAbst = 0D;
    private String escalader;
    private String abstRaison;
    private String atelier;

    public InfoBlqW() {
    }

    public InfoBlqW(Long week, Long year, String fmq, String sujetSupport, String qui, String bloquantEuro, String actMenees, String delai, Double tauxAbst, String escalader, String abstRaison, String atelier) {
        this.week = week;
        this.year = year;
        this.fmq = fmq;
        this.sujetSupport = sujetSupport;
        this.qui = qui;
        this.bloquantEuro = bloquantEuro;
        this.actMenees = actMenees;
        this.delai = delai;
        this.tauxAbst = tauxAbst;
        this.escalader = escalader;
        this.abstRaison = abstRaison;
        this.atelier = atelier;
    }

    public InfoBlqW() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getWeek() {
        return week;
    }

    public void setWeek(Long week) {
        this.week = week;
    }

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public String getFmq() {
        return fmq;
    }

    public void setFmq(String fmq) {
        this.fmq = fmq;
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

    public String getActMenees() {
        return actMenees;
    }

    public void setActMenees(String actMenees) {
        this.actMenees = actMenees;
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

    public String getAtelier() {
        return atelier;
    }

    public void setAtelier(String atelier) {
        this.atelier = atelier;
    }

    @Override
    public String toString() {
        return "InfoBlqW{" +
                "id=" + id +
                ", week=" + week +
                ", year=" + year +
                ", fmq='" + fmq + '\'' +
                ", sujetSupport='" + sujetSupport + '\'' +
                ", qui='" + qui + '\'' +
                ", bloquantEuro='" + bloquantEuro + '\'' +
                ", actMenees='" + actMenees + '\'' +
                ", delai='" + delai + '\'' +
                ", tauxAbst=" + tauxAbst +
                ", escalader='" + escalader + '\'' +
                ", abstRaison='" + abstRaison + '\'' +
                ", atelier='" + atelier + '\'' +
                '}';
    }
}
