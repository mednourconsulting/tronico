import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ToastrService} from 'ngx-toastr';
import {PcdWeekService} from '../../../../@core/backend/common/services/PcdWeek.service';

@Component({
  selector: 'ngx-pcd-chart',
  templateUrl: './pcd-chart.component.html',
  styleUrls: ['./pcd-chart.component.scss'],
  providers: [PcdWeekService],
})
export class PcdChartComponent implements AfterViewInit, OnDestroy  {
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
  year: number = new Date().getFullYear();
  weekFin = 52;
  weekFirst  = 1;
  week = [];
  otdRealise = [];
  otdObjectif = [];
  constructor(private theme: NbThemeService, private service: PcdWeekService, private toastr: ToastrService) {
  }
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  ngOnDestroy(): void {
}

  ngAfterViewInit(): void {
    if (this.weekFirst <= this.weekFin ) {
    this.service.getAll( this.atelier , this.year ).subscribe( data => {
      if (Object.keys(data).length === 0) {
        this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
      } else {
        this.week = [];
        data.forEach(obj => {
          if (obj.week >= this.weekFirst) {
            if (obj.week <= this.weekFin) {
              this.otdRealise.push(Number(obj.pcdEuro));
              this.otdObjectif.push(Number(obj.objectifEuro));
              this.week.push(obj.week);
              console.log(this.week);
            }
          }
        });
        this.chartDatasets = [
          {data: this.otdObjectif, label: 'PCD Objectif'},
          {data: this.otdRealise, label: 'PCD Realisation'},
        ];
        this.chartLabels = this.week;
      }
    });
    }
  }
  searchFor() {
    if (this.weekFirst <= this.weekFin ) {
      this.service.getAll( this.atelier , this.year ).subscribe( data => {
        if (Object.keys(data).length === 0 ) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.week = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst) {
              if (obj.week <= this.weekFin) {
                this.otdRealise.push(Number(obj.pcdEuro));
                this.otdObjectif.push(Number(obj.objectifEuro));
                this.week.push(obj.week);
                console.log(this.week);
              }
            }
          });
        }});
    } else {
      this.toastr.info('le premier semaine doit être inférieur au dernier', 'Attention');
    }
  }


}
