package com.akveo.bundlejava.charts;

public class PcdWeekChartData {
    private Double totalPcdEuro = 0D;
    private Double totalPcdQte = 0D;
    private Double totalEcartEuro = 0D;
    private Double totalEcartQte = 0D;

    public PcdWeekChartData(Double totalPcdEuro, Double totalPcdQte, Double totalEcartEuro, Double totalEcartQte) {
        this.totalPcdEuro = totalPcdEuro;
        this.totalPcdQte = totalPcdQte;
        this.totalEcartEuro = totalEcartEuro;
        this.totalEcartQte = totalEcartQte;
    }

    public Double getTotalPcdEuro() {
        return totalPcdEuro;
    }

    public void setTotalPcdEuro(Double totalPcdEuro) {
        this.totalPcdEuro = totalPcdEuro;
    }

    public Double getTotalPcdQte() {
        return totalPcdQte;
    }

    public void setTotalPcdQte(Double totalPcdQte) {
        this.totalPcdQte = totalPcdQte;
    }

    public Double getTotalEcartEuro() {
        return totalEcartEuro;
    }

    public void setTotalEcartEuro(Double totalEcartEuro) {
        this.totalEcartEuro = totalEcartEuro;
    }

    public Double getTotalEcartQte() {
        return totalEcartQte;
    }

    public void setTotalEcartQte(Double totalEcartQte) {
        this.totalEcartQte = totalEcartQte;
    }

    @Override
    public String toString() {
        return "PcdWeekChartData{" +
                "totalPcdEuro=" + totalPcdEuro +
                ", totalPcdQte=" + totalPcdQte +
                ", totalEcartEuro=" + totalEcartEuro +
                ", totalEcartQte=" + totalEcartQte +
                '}';
    }
}
