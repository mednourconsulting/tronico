import {ParetoOtdWeek} from './paretoOtdWeek';
import {Produit} from './produit';

export class ParetoOtdWeekItem {
  id: number;
  produit: Produit;
  ecartCarte: number;
  ecart: number;
  raison: string;
  paretoOtdWeek: ParetoOtdWeek;
  atelier: String;


  constructor(produit: Produit, ecartCarte: number, ecart: number, raison: string, atelier: String) {
    this.produit = produit;
    this.ecartCarte = ecartCarte;
    this.ecart = ecart;
    this.raison = raison;
    this.atelier = atelier;
  }
}
