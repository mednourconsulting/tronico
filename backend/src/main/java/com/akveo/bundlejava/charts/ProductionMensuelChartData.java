package com.akveo.bundlejava.charts;

public class ProductionMensuelChartData {
    private Double totalProductivite=0D;
    private Double totalObjectif=0D;
    private Double totalEcart=0D;

    public ProductionMensuelChartData(Double totalProductivite, Double totalObjectif, Double totalEcart) {
        this.totalProductivite = totalProductivite;
        this.totalObjectif = totalObjectif;
        this.totalEcart = totalEcart;
    }

    public ProductionMensuelChartData() {
    }

    public Double getTotalProductivite() {
        return totalProductivite;
    }

    public void setTotalProductivite(Double totalProductivite) {
        this.totalProductivite = totalProductivite;
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
        return "ProductionMensuelChartData{" +
                "totalProductivite=" + totalProductivite +
                ", totalObjectif=" + totalObjectif +
                ", totalEcart=" + totalEcart +
                '}';
    }
}
