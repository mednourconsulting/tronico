package com.akveo.bundlejava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Calendar;


@Entity
public class ProductionMensuel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private Long month = 0L;
    private Double productivite = 0D;
    private Double objectif = 0D;
    private Double ecart = 0D;
    private String atelier;

    public ProductionMensuel() {
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

    public Long getMonth() {
        return month;
    }

    public void setMonth(Long month) {
        this.month = month;
    }

    public Double getProductivite() {
        return productivite;
    }

    public void setProductivite(Double productivite) {
        this.productivite = productivite;
    }

    public Double getObjectif() {
        return objectif;
    }

    public void setObjectif(Double objectif) {
        this.objectif = objectif;
    }

    public Double getEcart() {
        return ecart;
    }

    public void setEcart(Double ecart) {
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
        return "ProductionMensuel{" +
                "id=" + id +
                ", year=" + year +
                ", month=" + month +
                ", productivite=" + productivite +
                ", objectif=" + objectif +
                ", ecart=" + ecart +
                ", atelier='" + atelier + '\'' +
                '}';
    }
}
