import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {OtdWeekService} from '../../../../@core/backend/common/services/OtdWeek.service';
import {ToastrService} from 'ngx-toastr';
import {NbThemeService} from '@nebular/theme';
@Component({
  selector: 'ngx-otw-chart',
  templateUrl: './otw-chart.component.html',
  styleUrls: ['./otw-chart.component.scss'],
  providers: [OtdWeekService, ToastrService],
})
export class OtwChartComponent implements AfterViewInit, OnDestroy, OnChanges  {
  chartType: string = 'line';
  chartDatasets: Array<any> = [0, 0];
  chartLabels: Array<any> = [];
  chartColors: Array<any> = [
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
  chartOptions: any = {
    responsive: true,
  };
  chartReady = true;
  @Input() atelier: string;
  year: number = new Date().getFullYear();
  weekFin = 52;
  weekFirst = 1;
  private Data: any[];
  otdRealise = [];
  otdObjectif = [];

  constructor(private theme: NbThemeService, private service: OtdWeekService, private toastr: ToastrService) {
  }

  ngOnDestroy(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterViewInit(): void {
    if (this.weekFirst <= this.weekFin) {
      this.service.getAll(this.atelier, this.year).subscribe(data => {
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
          this.chartDatasets = [
            {data: this.otdObjectif, label: 'OTD Objectif'},
            {data: this.otdRealise, label: 'OTD Realisation'},
          ];
          this.chartLabels = this.Data;
        }
      });
    }
  }
}
