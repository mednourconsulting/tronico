export class PlanActOtd {
  id: number;
  year: number;
  week: number;
  ecartEuro: number;
  produit: string;
  besoin: string;
  cause: string;
  action: string;
  qui: string;
  dateDebut: Date;
  dateObjectif: Date;
  dateRealisation: Date;
  actionEfficace: string;
  generalisationPossible: string;
  comment: string;
  atelier: string;

  constructor() {

  }
}
