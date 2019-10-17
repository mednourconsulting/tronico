package com.akveo.bundlejava.charts;

public class RealisationWChart {
    private Double totalRealisation = 0D;
    private Double totalObjectif = 0D;
    private Double totalEcart = 0D;

    public RealisationWChart(Double totalRealisation, Double totalObjectif, Double totalEcart) {
        this.totalRealisation = totalRealisation;
        this.totalObjectif = totalObjectif;
        this.totalEcart = totalEcart;
    }

    public RealisationWChart() {
    }

    public Double getTotalRealisation() {
        return totalRealisation;
    }

    public void setTotalRealisation(Double totalRealisation) {
        this.totalRealisation = totalRealisation;
    }

    public Double getTotalObjectif() {
        return totalObjectif;
    }

    public void setTotalObjectif(Double totalObjectif) {
        this.totalObjectif = totalObjectif;
    }

    public Double getTotalEcart() {
        return totalEcart;
    }

    public void setTotalEcart(Double totalEcart) {
        this.totalEcart = totalEcart;
    }

    @Override
    public String toString() {
        return "RealisationWChart{" +
                "totalRealisation=" + totalRealisation +
                ", totalObjectif=" + totalObjectif +
                ", totalEcart=" + totalEcart +
                '}';
    }
}
