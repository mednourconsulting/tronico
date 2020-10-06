import {ParetoOtdWeekItem} from './ParetoOtdWeekItem';

export class ParetoOtdWeek {
  id: number;
  year: number;
  week: number;
  bjectif: number;
  realise: number;
  ecart: number;
  ecartEcart: number;
  atelier: string;
  paretoOtdWeekItemList: ParetoOtdWeekItem[] = [];

  constructor() {
  }
}
