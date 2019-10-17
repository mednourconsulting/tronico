package com.akveo.bundlejava.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

@Entity
public class PlanActPcd implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private Long week=0L;
    private Long ecartEuro=0L;
    private String besoin;
    private String cause;
    @Column(columnDefinition = "TEXT")
    private String action;
    private String qui;
    private Date dateDebut;
    private Date dateObjectif;
    private Date dateRealisation;
    private String actionEfficace;
    private String generalisationPosssible;
    private String comment;

    public PlanActPcd(Long year, Long week, Long ecartEuro, String besoin, String cause, String action, String qui, Date dateDebut, Date dateObjectif, Date dateRealisation, String actionEfficace, String generalisationPosssible, String comment) {
        this.year = year;
        this.week = week;
        this.ecartEuro = ecartEuro;
        this.besoin = besoin;
        this.cause = cause;
        this.action = action;
        this.qui = qui;
        this.dateDebut = dateDebut;
        this.dateObjectif = dateObjectif;
        this.dateRealisation = dateRealisation;
        this.actionEfficace = actionEfficace;
        this.generalisationPosssible = generalisationPosssible;
        this.comment = comment;
    }

    public PlanActPcd() {
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

    public Long getEcartEuro() {
        return ecartEuro;
    }

    public void setEcartEuro(Long ecartEuro) {
        this.ecartEuro = ecartEuro;
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

    public String getGeneralisationPosssible() {
        return generalisationPosssible;
    }

    public void setGeneralisationPosssible(String generalisationPosssible) {
        this.generalisationPosssible = generalisationPosssible;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Override
    public String toString() {
        return "PlanActPcd{" +
                "id=" + id +
                ", year=" + year +
                ", week=" + week +
                ", ecartEuro=" + ecartEuro +
                ", besoin='" + besoin + '\'' +
                ", cause='" + cause + '\'' +
                ", action='" + action + '\'' +
                ", qui='" + qui + '\'' +
                ", dateDebut=" + dateDebut +
                ", dateObjectif=" + dateObjectif +
                ", dateRealisation=" + dateRealisation +
                ", actionEfficace='" + actionEfficace + '\'' +
                ", generalisationPosssible='" + generalisationPosssible + '\'' +
                ", comment='" + comment + '\'' +
                '}';
    }
}
