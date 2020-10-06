export class ProjetBM {
  id: number;
  taskName: number;
  taskDescription: string;
  responsable: string;
  startsAt: number;
  endsAt: number;
  status: string;
  advancement: number; // 0-100%
  year: number;
  dateAnnule: Date;

  constructor() {
  }
}
