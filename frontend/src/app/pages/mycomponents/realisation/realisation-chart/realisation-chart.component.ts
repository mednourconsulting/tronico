import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ToastrService} from 'ngx-toastr';
import {RealisationWeekService} from '../../../../@core/backend/common/services/RealisationWeek.service';

@Component({
  selector: 'ngx-realisation-chart',
  templateUrl: './realisation-chart.component.html',
  styleUrls: ['./realisation-chart.component.scss'],
  providers: [RealisationWeekService],
})
export class RealisationChartComponent implements AfterViewInit, OnDestroy  {
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
      backgroundColor: 'rgba(0, 250, 220, .2)',
      borderColor: 'rgba(0, 213, 132, .7)',
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
  Realise = [];
  Objectif = [];
  constructor(private theme: NbThemeService, private service: RealisationWeekService, private toastr: ToastrService) {
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    if (this.weekFirst <= this.weekFin ) {
      this.service.getAll( this.atelier , this.year ).subscribe( data => {
        if (Object.keys(data).length === 0 ) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.Data = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst) {
              if (obj.week <= this.weekFin) {
                this.Realise.push(Number(obj.heuresRealise));
                this.Objectif.push(Number(obj.objectif));
                this.Data.push(obj.week);
                console.log(this.Data);
              }
            }
          });
          this.chartDatasets = [
            {data: this.Objectif, label: 'Realisation Objectif '},
            {data: this.Realise, label: 'Realisation'},
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

