package com.akveo.bundlejava.model;

import javax.persistence.*;
import java.io.Serializable;


@Entity
public class ParetoWeek implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String produit;
    private Double ecartCarte;
    private Double ecart;
    private String raison;
    @ManyToOne
    private ParetoOtdWeek paretoOtdWeek;
}
