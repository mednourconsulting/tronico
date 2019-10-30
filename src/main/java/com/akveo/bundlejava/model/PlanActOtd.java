package com.akveo.bundlejava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

@Entity
public class PlanActOtd implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private Long week;
    private double ecartEuro= 0D;
    private String produit;
    private String besoin;
    private String cause;
    private String action;
    private String qui;
    private Date dateDebut;
    private Date dateObjectif;
    private Date dateRealisation;
    private String actionEfficace;
    private String generalisationPossible;
    private String comment;
    private String atelier;

    public PlanActOtd() {
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

    public double getEcartEuro() {
        return ecartEuro;
    }

    public void setEcartEuro(Long ecartEuro) {
        this.ecartEuro = ecartEuro;
    }

    public String getProduit() {
        return produit;
    }

    public void setProduit(String produit) {
        this.produit = produit;
    }

    public String getBesoin() {
        return besoin;
    }

    public void setBesoin(String besoin) {
        this.besoin = besoin;
    }

    public String getCause() {
        return cause;
    }

    public void setCause(String cause) {
        this.cause = cause;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getQui() {
        return qui;
    }

    public void setQui(String qui) {
        this.qui = qui;
    }

    public Date getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
    }

    public Date getDateObjectif() {
        return dateObjectif;
    }

    public void setDateObjectif(Date dateObjectif) {
        this.dateObjectif = dateObjectif;
    }

    public Date getDateRealisation() {
        return dateRealisation;
    }

    public void setDateRealisation(Date dateRealisation) {
        this.dateRealisation = dateRealisation;
    }

    public String getActionEfficace() {
        return actionEfficace;
    }

    public void setActionEfficace(String actionEfficace) {
        this.actionEfficace = actionEfficace;
    }

    public String getGeneralisationPossible() {
        return generalisationPossible;
    }

    public void setGeneralisationPossible(String generalisationPossible) {
        this.generalisationPossible = generalisationPossible;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getAtelier() {
        return atelier;
    }

    public void setAtelier(String atelier) {
        this.atelier = atelier;
    }

    public PlanActOtd(Long year, Long week, double ecartEuro, String produit, String besoin, String cause, String action, String qui, Date dateDebut, Date dateObjectif, Date dateRealisation, String actionEfficace, String generalisationPossible, String comment, String atelier) {
        this.year = year;
        this.week = week;
        this.ecartEuro = ecartEuro;
        this.produit = produit;
        this.besoin = besoin;
        this.cause = cause;
        this.action = action;
        this.qui = qui;
        this.dateDebut = dateDebut;
        this.dateObjectif = dateObjectif;
        this.dateRealisation = dateRealisation;
        this.actionEfficace = actionEfficace;
        this.generalisationPossible = generalisationPossible;
        this.comment = comment;
        this.atelier = atelier;
    }

    @Override
    public String toString() {
        return "PlanActOtd{" +
                "id=" + id +
                ", year=" + year +
                ", week=" + week +
                ", ecartEuro=" + ecartEuro +
                ", produit='" + produit + '\'' +
                ", besoin='" + besoin + '\'' +
                ", cause='" + cause + '\'' +
                ", action='" + action + '\'' +
                ", qui='" + qui + '\'' +
                ", dateDebut=" + dateDebut +
                ", dateObjectif=" + dateObjectif +
                ", dateRealisation=" + dateRealisation +
                ", actionEfficace='" + actionEfficace + '\'' +
                ", generalisationPossible='" + generalisationPossible + '\'' +
                ", comment='" + comment + '\'' +
                ", atelier='" + atelier + '\'' +
                '}';
    }
}
