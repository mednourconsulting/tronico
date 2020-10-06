import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ToastrService} from 'ngx-toastr';
import {TrsCMSService} from '../../../../@core/backend/common/services/TrsCMS.service';

@Component({
  selector: 'ngx-trs-chart',
  templateUrl: './trs-chart.component.html',
  styleUrls: ['./trs-chart.component.scss'],
  providers: [TrsCMSService],
})
export class TrsChartComponent implements AfterViewInit, OnDestroy  {
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
 // year: number = new Date().getFullYear();
  year: number = 2019;
  weekFin = 52;
  weekFirst  = 1;
  private Data: any[];
  private themeSubscription: any;
  otdRealise = [];
  otdObjectif = [];
  constructor(private theme: NbThemeService, private service: TrsCMSService, private toastr: ToastrService) {
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    if (this.weekFirst <= this.weekFin ) {
      this.service.get(this.year).subscribe( data => {
        if (Object.keys(data).length === 0 ) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.Data = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst) {
              if (obj.week <= this.weekFin) {
                this.otdRealise.push(Number(obj.trsRealise));
                this.otdObjectif.push(Number(obj.objectif));
                this.Data.push(obj.week);
                console.log(this.Data);
              }
            }
          });
          this.chartDatasets = [
            {data: this.otdObjectif, label: 'TRS Objectif'},
            {data: this.otdRealise, label: 'TRS Realisation'},
          ];
          this.chartLabels = this.Data;
        }});
    }
  }
  searchFor() {
    if (this.weekFirst <= this.weekFin ) {
      this.service.get(this.year).subscribe(data => {
        if (Object.keys(data).length === 0) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.Data = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst) {
              if (obj.week <= this.weekFin) {
                this.otdRealise.push(Number(obj.otdRealise));
                this.otdObjectif.push(Number(obj.objectif));
                this.Data.push(obj.week);
                console.log(this.Data);
              }
            }
          });
        }
      });
    }
  }

  chartHovered($event: any) {
  }

  chartClicked($event: any) {
  }
}
