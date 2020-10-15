import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {RealisationWeekService} from '../../../../@core/backend/common/services/RealisationWeek.service';

@Component({
  selector: 'ngx-realisation-chart',
  templateUrl: './realisation-chart.component.html',
  styleUrls: ['./realisation-chart.component.scss'],
  providers: [RealisationWeekService],
})
export class RealisationChartComponent implements OnDestroy,OnChanges  {
  public chartType: string;
  public chartDatasets: Array<any> = [];
  public dataColumnNames : Array<any> = []; 
  public chartOptions: any ;
  public chartSize:any;
  @Input() atelier: string;
  private year: number;
  private maxWeekValue:number;
  private minWeekValue:number;
  public isDatasetsEmpty:boolean;
  constructor( private service: RealisationWeekService, private toastr: ToastrService) {
    this.chartType= 'LineChart';
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
    this.dataColumnNames = ["Week", "Realisation Objectif", "Realisation"];
    this.year = new Date().getFullYear();
    this.maxWeekValue = 52;
    this.minWeekValue = 1;
    this.isDatasetsEmpty=true;
  }
 
  ngOnChanges(changes: SimpleChanges): void {
      this.loadData(changes.atelier.currentValue);
    }

  loadData(atelier:string):void{
      this.service.getAll( atelier , this.year ).subscribe( data => {
        this.chartDatasets=[];
        if (Object.keys(data).length === 0 ) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
          this.isDatasetsEmpty=true;
        } else {
          data.forEach(obj => {
            if ((obj.week >= this.minWeekValue) && (obj.week <= this.maxWeekValue) ) {
                this.chartDatasets.push([obj.week,Number(obj.objectif),Number(obj.heuresRealise)]);
              }
          });
          this.isDatasetsEmpty=false;
        }});
  }

  ngOnDestroy(): void {
  }

}

