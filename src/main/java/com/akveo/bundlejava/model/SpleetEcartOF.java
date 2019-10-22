package com.akveo.bundlejava.model;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Calendar;

@Entity
public class SpleetEcartOF implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long nClient = 0L;
    private String lot;
    private String descProduit;
    private int qteBase;
    private int qteSolde;
    private String newTips;
    private String comment;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private String atelier;

    public SpleetEcartOF(Long nClient, String lot, String descProduit, int qteBase, int qteSolde, String newTips, String comment, Long year, String atelier) {
        this.nClient = nClient;
        this.lot = lot;
        this.descProduit = descProduit;
        this.qteBase = qteBase;
        this.qteSolde = qteSolde;
        this.newTips = newTips;
        this.comment = comment;
        this.year = year;
        this.atelier = atelier;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getnClient() {
        return nClient;
    }

    public void setnClient(Long nClient) {
        this.nClient = nClient;
    }

    public String getLot() {
        return lot;
    }

    public void setLot(String lot) {
        this.lot = lot;
    }

    public String getDescProduit() {
        return descProduit;
    }

    public void setDescProduit(String descProduit) {
        this.descProduit = descProduit;
    }

    public int getQteBase() {
        return qteBase;
    }

    public void setQteBase(int qteBase) {
        this.qteBase = qteBase;
    }

    public int getQteSolde() {
        return qteSolde;
    }

    public void setQteSolde(int qteSolde) {
        this.qteSolde = qteSolde;
    }

    public String getNewTips() {
        return newTips;
    }

    public void setNewTips(String newTips) {
        this.newTips = newTips;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public String getAtelier() {
        return atelier;
    }

    public void setAtelier(String atelier) {
        this.atelier = atelier;
    }

    @Override
    public String toString() {
        return "SpleetEcartOF{" +
                "id=" + id +
                ", nClient=" + nClient +
                ", lot='" + lot + '\'' +
                ", descProduit='" + descProduit + '\'' +
                ", qteBase=" + qteBase +
                ", qteSolde=" + qteSolde +
                ", newTips='" + newTips + '\'' +
                ", comment='" + comment + '\'' +
                ", year=" + year +
                ", atelier='" + atelier + '\'' +
                '}';
    }
}
