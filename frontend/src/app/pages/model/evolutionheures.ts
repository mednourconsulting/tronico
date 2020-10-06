export class Evolutionheures {
  id: number;
  year: number;
  week: number;
  budjet: number;
  heuresCDE: number;
  heuresPrevus: number;
  facture: number;
  ecart: number;

  constructor(id?: number,
              year?: number,
              week?: number,
              budjet?: number,
              henced?: number,
              hprevus?: number,
              facture?: number) {
    this.id = id;
    this.year = year;
    this.week = week;
    this.budjet = budjet;
    this.heuresCDE = henced;
    this.heuresPrevus = hprevus;
    this.facture = facture;
    this.ecart = 0;
  }
}
