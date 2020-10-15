import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {TrsCMSService} from '../../../../@core/backend/common/services/TrsCMS.service';

@Component({
  selector: 'ngx-trs-chart',
  templateUrl: './trs-chart.component.html',
  styleUrls: ['./trs-chart.component.scss'],
  providers: [TrsCMSService],
})
export class TrsChartComponent implements OnDestroy,OnChanges  {
  public chartType: string;
  public chartDatasets: Array<any> = [];
  public dataColumnNames : Array<any> = [];
  public chartOptions: any;
  public chartSize;
  @Input() atelier: string;
 // year: number = new Date().getFullYear();
  private year:number=2019;
  private maxWeekValue:number;
  private minWeekValue:number;
  public isDatasetsEmpty:boolean;
  constructor( private service: TrsCMSService, private toastr: ToastrService) {
    this.chartType = 'LineChart';
    this.chartOptions= {   
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
    this.dataColumnNames = ["Week", "TRS Objectif", "TRS Realisation"];
    this.maxWeekValue = 52;
    this.minWeekValue=1;
    this.isDatasetsEmpty=true;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }

  loadData():void{
      this.service.get(this.year).subscribe( data => {
        this.chartDatasets=[];
        if (Object.keys(data).length === 0 ) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
          this.isDatasetsEmpty=true;
        } else {
          data.forEach(obj => {
            if ((obj.week >= this.minWeekValue) && (obj.week <= this.maxWeekValue)) {
                this.chartDatasets.push([obj.week,Number(obj.objectif),Number(obj.trsRealise)]);
            }
          });
          this.isDatasetsEmpty=false;
        }});
  }

  ngOnDestroy(): void {
  }
}
