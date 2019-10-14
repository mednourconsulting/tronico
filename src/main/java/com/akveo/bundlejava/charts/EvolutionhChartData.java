package com.akveo.bundlejava.charts;

public class EvolutionhChartData {
    private Double totalBudjet;
    private Integer totalHeuresCDE = Integer.valueOf(0);
    private Integer totalHeuresPrevus = Integer.valueOf(0);
    private Double totalFacture;
    private Double totalEcart;

    public EvolutionhChartData() {
    }

    public EvolutionhChartData(Double budjet, Integer heuresCDE, Integer heuresPrevus, Double facture, Double ecart) {
        this.totalBudjet = budjet;
        this.totalHeuresCDE = heuresCDE;
        this.totalHeuresPrevus = heuresPrevus;
        this.totalFacture = facture;
        this.totalEcart = ecart;
    }

    public Double getTotalBudjet() {
        return totalBudjet;
    }

    public void setTotalBudjet(Double totalBudjet) {
        this.totalBudjet = totalBudjet;
    }

    public Integer getTotalHeuresCDE() {
        return totalHeuresCDE;
    }

    public void setTotalHeuresCDE(Integer totalHeuresCDE) {
        this.totalHeuresCDE = totalHeuresCDE;
    }

    public Integer getTotalHeuresPrevus() {
        return totalHeuresPrevus;
    }

    public void setTotalHeuresPrevus(Integer totalHeuresPrevus) {
        this.totalHeuresPrevus = totalHeuresPrevus;
    }

    public Double getTotalFacture() {
        return totalFacture;
    }

    public void setTotalFacture(Double totalFacture) {
        this.totalFacture = totalFacture;
    }

    public Double getTotalEcart() {
        return totalEcart;
    }

    public void setTotalEcart(Double totalEcart) {
        this.totalEcart = totalEcart;
    }

    @Override
    public String toString() {
        return "EvolutionhChartData{" +
                "totalBudjet=" + totalBudjet +
                ", totalHeuresCDE=" + totalHeuresCDE +
                ", totalHeuresPrevus=" + totalHeuresPrevus +
                ", totalFacture=" + totalFacture +
                ", totalEcart=" + totalEcart +
                '}';
    }
}
