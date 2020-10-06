import {ParetoOtdWeek} from './paretoOtdWeek';

export class ParetoOtdWeekItemList {
  id: number;
  produit: string;
  ecartCarte: number;
  ecart: number;
  raison: string;
  paretoOtdWeek: ParetoOtdWeek;
  atelier: String;


  constructor(produit: string, ecartCarte: number, ecart: number, raison: string, atelier: String ) {
    this.produit = produit;
    this.ecartCarte = ecartCarte;
    this.ecart = ecart;
    this.raison = raison;
    this.atelier = atelier;
  }
}
