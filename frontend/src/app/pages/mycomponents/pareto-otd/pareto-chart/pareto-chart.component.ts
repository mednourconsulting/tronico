import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {OtdWeekService} from '../../../../@core/backend/common/services/OtdWeek.service';
import {ToastrService} from 'ngx-toastr';
import {ParetoOtdWeekService} from '../../../../@core/backend/common/services/ParetoOtdWeek.service';
import {ParetoOtdWeekItemService} from '../../../../@core/backend/common/services/ParetoOtdWeekItem.service';
import {ProduitService} from '../../../../@core/backend/common/services/Produit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-pareto-chart',
  templateUrl: './pareto-chart.component.html',
  styleUrls: ['./pareto-chart.component.scss'],
  providers: [ParetoOtdWeekService, ParetoOtdWeekItemService, ProduitService],
})
export class ParetoChartComponent implements AfterViewInit, OnDestroy  {
  @Input() atelier: string;
  options: any = {};
  year: number = new Date().getFullYear();
  weekFin = 52;
  weekFirst  = 1;
  collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  private Data: any[];
  private themeSubscription: any;
  otdRealise = [];
  otdObjectif = [];
  private produits: any = [];
  constructor(private theme: NbThemeService, private service: ParetoOtdWeekService, private serviceOtd: OtdWeekService,  private router: Router,
              private service_item: ParetoOtdWeekItemService, private service_pr: ProduitService, private toastr: ToastrService) {
    this.service_pr.getAll().subscribe(data => {
      data.forEach(obj => {
        this.produits.push({value: obj.produit, title: obj.produit, desc: obj.des , sum: 0});
      });
    });
  }

  ngOnDestroy(): void {
   // this.themeSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    if (this.weekFirst <= this.weekFin ) {
      this.service.getAllByAtelierAndYear( this.atelier , this.year ).subscribe( data => {
        if (data === null ) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.Data = [];
          data.forEach(obj => {
            if (obj.paretoOtdWeekItemList !== null) {
              if (obj.week >= this.weekFirst) {
                if (obj.week <= this.weekFin) {
                  obj.paretoOtdWeekItemList.forEach(Data => {
                    this.produits.forEach(Obj => {
                      if (Data.produit.produit === Obj.title) {
                        Obj.sum += Number(Data.ecart.toFixed(2));
                      }
                    });
                  });
                }
              }
            }
          });
          console.log(this.produits);
          this.produits.forEach(produit => {
            this.Data.push(['' + produit.desc, produit.sum]);
          });
        }   });

      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

        const colors: any = config.variables;
        const echarts: any = config.variables.echarts;

        this.options = {
          backgroundColor: echarts.bg,
          color: [colors.success, colors.info],
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross',
            },
          },
          legend: {
            data: ['2020'],
            textStyle: {
              color: echarts.textColor,
            },
          },
          grid: {
            top: 70,
            bottom: 50,
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true,
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors.info,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
              axisPointer: {
                label: {
                  formatter: params => {
                    return (
                        ' ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                    );
                  },
                },
              },
              data: this.produits.title,
            },
          ],
          yAxis: [
            {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
              splitLine: {
                lineStyle: {
                  color: echarts.splitLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
          ],
          series: [
            {
              name: 'Produit',
              type: 'line',
              smooth: true,
              data: this.produits.sum,
            },
          ],
        };
      });
    } else {
      this.toastr.info('le premier semaine doit être inférieur au dernier', 'Attention');
    }
  }
  searchFor() {
          if (this.weekFirst <= this.weekFin ) {
            this.service.getAllByAtelierAndYear( this.atelier , this.year ).subscribe( data => {
              if (data === null ) {
                this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
              } else {
                this.Data = [];
                data.forEach(obj => {
                  if (obj.paretoOtdWeekItemList !== null) {
                    if (obj.week >= this.weekFirst) {
                      if (obj.week <= this.weekFin) {
                        obj.paretoOtdWeekItemList.forEach(Data => {
                          this.produits.forEach(Obj => {
                            if (Data.produit.produit === Obj.title) {
                              Obj.sum += Number(Data.ecart.toFixed(2));
                            }
                          });
                        });
                      }
                    }
                  }
                });
                console.log(this.produits);
                this.produits.forEach(produit => {
                  this.Data.push(['' + produit.desc, produit.sum]);
                });
              }   });

          this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

            const colors: any = config.variables;
            const echarts: any = config.variables.echarts;

            this.options = {
              backgroundColor: echarts.bg,
              color: [colors.success, colors.info],
              tooltip: {
                trigger: 'none',
                axisPointer: {
                  type: 'cross',
                },
              },
              legend: {
                data: ['2020'],
                textStyle: {
                  color: echarts.textColor,
                },
              },
              grid: {
                top: 70,
                bottom: 50,
              },
              xAxis: [
                {
                  type: 'category',
                  axisTick: {
                    alignWithLabel: true,
                  },
                  axisLine: {
                    onZero: false,
                    lineStyle: {
                      color: colors.info,
                    },
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor,
                    },
                  },
                  axisPointer: {
                    label: {
                      formatter: params => {
                        return (
                            ' ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                        );
                      },
                    },
                  },
                  data: this.Data,
                },
              ],
              yAxis: [
                {
                  type: 'value',
                  axisLine: {
                    lineStyle: {
                      color: echarts.axisLineColor,
                    },
                  },
                  splitLine: {
                    lineStyle: {
                      color: echarts.splitLineColor,
                    },
                  },
                  axisLabel: {
                    textStyle: {
                      color: echarts.textColor,
                    },
                  },
                },
              ],
              series: [
                {
                  name: 'pass',
                  type: 'line',
                  smooth: true,
                  data: [],
                },
              ],
            };
          });
    } else {
      this.toastr.info('le premier semaine doit être inférieur au dernier', 'Attention');
    }
  }
}

