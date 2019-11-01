package com.akveo.bundlejava.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class ConfigProductiviteMensuel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String atelier;
    private Double objectif = new Double(0);

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

    public Double getObjectif() {
        return objectif;
    }

    public void setObjectif(Double objectif) {
        this.objectif = objectif;
    }

    @Override
    public String toString() {
        return "ConfigProductiviteMensuel{" +
                "id=" + id +
                ", atelier='" + atelier + '\'' +
                ", objectif=" + objectif +
                '}';
    }
}
