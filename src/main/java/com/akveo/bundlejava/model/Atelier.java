package com.akveo.bundlejava.model;

import java.io.Serializable;

public class Atelier implements Serializable {
    private long id;
    private String desc;
    private String superviseur;

    @Override
    public String toString() {
        return "Atelier{" +
                "id=" + id +
                ", desc='" + desc + '\'' +
                ", superviseur='" + superviseur + '\'' +
                '}';
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getSuperviseur() {
        return superviseur;
    }

    public void setSuperviseur(String superviseur) {
        this.superviseur = superviseur;
    }

    public Atelier(long id, String desc, String superviseur) {
        this.id = id;
        this.desc = desc;
        this.superviseur = superviseur;
    }
}
