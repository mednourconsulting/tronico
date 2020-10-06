export class BarChartData {
  totalBudjet: number;
  totalHeuresCDE: number;
  totalHeuresPrevus: number;
  totalFacture: number;
  totalEcart: number;

  constructor(totalBudjet?: number, totalHeuresCDE?: number,
              totalHeuresPrevus?: number, totalFacture?: number, totalEcart?: number) {
    this.totalBudjet = totalBudjet;
    this.totalHeuresCDE = totalHeuresCDE;
    this.totalHeuresPrevus = totalHeuresPrevus;
    this.totalFacture = totalFacture;
    this.totalEcart = totalEcart;
  }
}
