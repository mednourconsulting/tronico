import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ToastrService} from 'ngx-toastr';
import {EvolutionheuresService} from '../../../../@core/backend/common/services/evolutionheures.service';

@Component({
  selector: 'ngx-evolution-hchart',
  templateUrl: './evolution-hchart.component.html',
  styleUrls: ['./evolution-hchart.component.scss'],
})
export class EvolutionHChartComponent implements AfterViewInit, OnDestroy  {

  public chartType: string = 'line';
  public chartDatasets: Array<any> = [];
  public chartLabels: Array<any> = [];
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgb(204, 230, 255)',
      borderColor: 'rgb(179, 218, 255)',
      borderWidth: 2,
    },

    {
      backgroundColor: 'rgb(255, 204, 153)',
      borderColor: 'rgb(255, 204, 102)',
      borderWidth: 2,
    },
  ];
  public chartOptions: any = {
    responsive: true,
  };
  @Input() atelier: string;
  options: any = {};
  year: number = new Date().getFullYear();
  weekFin = 52;
  weekFirst  = 1;
  collection = [];
  private Data: any[];
  heuresCDE = [];
  heuresPrevus = [];
  budjet = [];
  facture = [];
  constructor(private theme: NbThemeService, private service: EvolutionheuresService, private toastr: ToastrService) {
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    if (this.weekFirst <= this.weekFin ) {
      this.service.getAll(  this.year ).subscribe( data => {
        if (Object.keys(data).length === 0 ) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.Data = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst) {
              if (obj.week <= this.weekFin) {
                this.heuresCDE.push(Number(obj.heuresCDE));
                this.heuresPrevus.push(Number(obj.heuresPrevus));
                this.budjet.push(Number(obj.budjet));
                this.facture.push(Number(obj.facture));
                this.Data.push(obj.week);
                console.log(this.Data);
              }
            }
          });
          this.chartDatasets = [
            {data: this.heuresCDE, label: 'Heures CDE'},
            {data: this.heuresPrevus, label: 'Heures Prevus'},
            {data: this.budjet, label: 'budjet'},
            {data: this.facture, label: 'facture'},
          ];
          this.chartLabels = this.Data;
        }});
    }
  }

  chartHovered($event: any) {
  }

  chartClicked($event: any) {
  }

}
