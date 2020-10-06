export class PlanActProductivite {
  id: number;
  year: number;
  month: number;
  ecart: number;
  produit: string;
  besoin: string;
  cause: string;
  action: string;
  qui: string;
  dateDebut: Date;
  dateObjectif: Date;
  dateRealisation: Date;
  actionEfficace: string;
  generalisationPosssible: string;
  comment: string;
  atelier: string;

  constructor() {}
}
