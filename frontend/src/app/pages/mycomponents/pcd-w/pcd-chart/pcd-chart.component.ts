import { Component, Input, OnChanges, OnDestroy,SimpleChanges} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {PcdWeekService} from '../../../../@core/backend/common/services/PcdWeek.service';

@Component({
  selector: 'ngx-pcd-chart',
  templateUrl: './pcd-chart.component.html',
  styleUrls: ['./pcd-chart.component.scss'],
  providers: [PcdWeekService],
})
export class PcdChartComponent implements  OnDestroy,OnChanges  {

  public chartType: string ;
  public chartDatasets: Array<any> = [];
  public dataColumnNames: Array<any> = [];
  public chartOptions: any;
  public chartSize:any;
  @Input() atelier: string;
  private year: number
  private maxWeekValue:number;
  private minWeekValue:number;
  public isDatasetsEmpty:boolean;
  constructor( private service: PcdWeekService, private toastr: ToastrService) {
    this.chartType= 'LineChart';
    this.chartOptions = {   
      hAxis: {
        title: 'Week'
     },
     vAxis:{
        title: 'Value'
     },
     legend: { position: 'top', alignment: 'start' },
     colors: ['#00d584', '#c86384'],
    pointSize:5
    };
    this.chartSize={"width":352,"height":200};
    this.dataColumnNames = ["Week", "PCD Objectif", "PCD Realisation"];
    this.year = new Date().getFullYear();
    this.maxWeekValue=52;
    this.minWeekValue=1;
    this.isDatasetsEmpty=true;
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.loadData(changes.atelier.currentValue);
  }

  loadData(atelier:string):void{
      this.service.getAll( atelier , this.year ).subscribe( data => {
        this.chartDatasets=[];
        if (Object.keys(data).length === 0) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
          this.isDatasetsEmpty=true;
        } else {
          data.forEach(obj => {
            if ((obj.week >= this.minWeekValue) && (obj.week <= this.maxWeekValue)) {
                this.chartDatasets.push([obj.week,Number(obj.objectifEuro),Number(obj.pcdEuro)]);
              }
          });
          this.isDatasetsEmpty=false;
        }
      });
  }

  ngOnDestroy(): void {
  }
}
