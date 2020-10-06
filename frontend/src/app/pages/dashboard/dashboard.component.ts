/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {DashboardFragService} from '../../@core/backend/common/services/DashboardFrag.service';
import {DashboardFrag} from '../model/DashboardFrag';
import {Tra} from '../model/Tra';
import {OtdWeekService} from '../../@core/backend/common/services/OtdWeek.service';
import {PcdWeekService} from '../../@core/backend/common/services/PcdWeek.service';
import {EvolutionheuresService} from '../../@core/backend/common/services/evolutionheures.service';
import {TrsCMSService} from '../../@core/backend/common/services/TrsCMS.service';
import {UsersService} from '../../@core/backend/common/services/users.service';
import {DevicesData} from '../../@core/interfaces/iot/devices';
import {takeWhile} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';

import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AtelierChartComponent} from '../atelier-chart/atelier-chart.component';
import {AtelierInfoComponent} from '../atelier-info/atelier-info.component';
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
  providers: [DashboardFragService, OtdWeekService, PcdWeekService, EvolutionheuresService, TrsCMSService, UsersService , MatDialog , AtelierChartComponent , AtelierInfoComponent],
})
export class DashboardComponent implements OnInit {

  // @ViewChild('item', {static: true}) accordion;
  isAdmin: boolean;
  //
  // toggle() {
  //   this.accordion.toggle();
  // }

  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;
  fragDashboard: DashboardFrag = new DashboardFrag();
  fragDashboardCMS: DashboardFrag = new DashboardFrag();
  fragDashboardEiffel: DashboardFrag = new DashboardFrag();
  fragDashboardVauban: DashboardFrag = new DashboardFrag();
  fragDashboardTechnique: DashboardFrag = new DashboardFrag();
  fragDashboardMagasin: DashboardFrag = new DashboardFrag();
  fragDashboardTest: DashboardFrag = new DashboardFrag();
  atelier = {atelierOtd: '', atelierPcd: '', atelierEVH: '', atelierTrs: ''};
  weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  week: number;
  otdWeek: number;
  year = {
    yearOtd: (new Date).getFullYear(),
    yearPcd: (new Date).getFullYear(),
    yearD: (new Date).getFullYear(),
    yearEVH: (new Date).getFullYear(),
    yearTrs: (new Date).getFullYear(),
  };
  // currentWeek  = this.dashboardFragService.getCurrentWeek();
  currentWeek = 2019;
  tra: Tra = new Tra();
  date = new Date();
  evolutionheures = {
    title: 'Evolution des heures',
    type: 'ComboChart',
    data: [
      ['Apples', 2, 6, 0],
      ['Oranges', 3, 6, 0],
      ['Pears', 5, 6, 0],
      ['Bananas', 9, 6, 0],
      ['Plums', 2, 6, 0],
    ],
    columnNames: ['Fruits', 'Jane', 'Jone', 'Average'],
    options: {
      hAxis: {
        title: 'Person',
      },
      vAxis: {
        title: 'Fruits',
      },
      seriesType: 'bars',
      series: {
        0: {type: 'bars'},
        1: {type: 'line'},
      },
    },
    width: 900,
    height: 600,
  };
  weekFin = {weekFinOtd: 52, weekFinPcd: 52, weekFinEVH: 52, weekFinTrs: 52};
  weekFirst = {weekFirstOtd: 1, weekFirstsPcd: 1, weekFirstEVH: 1, weekFirstsTrs: 1};
  DataOtd: any;
  DataPcd: any;
  DataTrs: any;
  stackedChartOtd = {
    title: 'Otd par Semaine',
    typeChart: 'AreaChart',
    columnNames: ['Semaine', 'Objectif(%)', 'Realisation(%)'],
    options: {
      hAxis: {
        title: 'Semaine',
      },
      vAxis: {title: 'Otd Realisation (%)'},
    },
    width: 550,
    height: 400,
    data: [['0', 0, 0]],
  };
  chartType = [{type: 'LineChart', name: 'Line'}, {type: 'AreaChart', name: 'Area '}, {type: 'BarChart', name: 'Bar'},
    {type: 'ColumnChart', name: 'Column'}];
  listAtelier = ['vaubon', 'cms', 'eiffel'];
  stackedChartPcd = {
    title: 'Pcd par Semaine',
    typeChart: 'AreaChart',
    columnNames: ['Semaine', 'Objectif(%)', 'Realisation(%)'],
    options: {
      hAxis: {
        title: 'Semaine',
      },
      vAxis: {title: 'Pcd Realisation (%)'},
    },
    width: 550,
    height: 400,
    data: [['0', 0, 0]],
  };
  stackedChartEVH1 = {
    title: 'Evolution d\'heure par Semaine',
    typeChart: 'AreaChart',
    columnNames: ['Semaine', '(H)', '(H)'],
    options: {
      hAxis: {
        title: 'Semaine',
      },
      vAxis: {title: 'Evolution d\'heure (H)'},
    },
    width: 550,
    height: 400,
    data: [['0', 0, 0]],
  };
  stackedChartEVH2 = {
    title: 'Evolution d\'heure par Semaine',
    typeChart: 'AreaChart',
    columnNames: ['Semaine', '(H)', '(H)'],
    options: {
      hAxis: {
        title: 'Semaine',
      },
      vAxis: {title: 'Evolution d\'heure (H)'},
    },
    width: 550,
    height: 400,
    data: [['0', 0, 0]],
  };
  stackedChartTrs = {
    title: 'TRS par Semaine',
    typeChart: 'AreaChart',
    columnNames: ['Semaine', '(%)', '(%)'],
    options: {
      hAxis: {
        title: 'Semaine',
      },
      vAxis: {title: 'TRS (%)'},
    },
    width: 550,
    height: 400,
    data: [['0', 0, 0]],
  };
  DataEHVC: any[];
  DataEVHH: any[];
  constructor(private dashboardFragService: DashboardFragService,
              private serviceOtd: OtdWeekService, private toastr: ToastrService, private userservice: UsersService,
              private servicePcd: PcdWeekService, private serviceEVH: EvolutionheuresService,
              private serviceTrs: TrsCMSService, private devicesService: DevicesData,
              private dialog: MatDialog, private router: Router) {
  }

  getTra() {
    this.dashboardFragService.getTra('vaubon', 'eiffel', this.year.yearD, this.week).subscribe(data => {
      if (data != null) {
        this.tra = data;
      }
    });
  }

  searchFor() {
    console.log(this.week);
    this.dashboardFragService.getTra('vaubon', 'eiffel', this.year.yearD, this.week).subscribe(data => {
      if (data != null) {
        this.tra = data;
      }
    });
    this.dashboardFragService.getByAtelier('cms', this.year.yearD, this.week).subscribe(data => {
      if (data != null) {
        this.fragDashboardCMS = data;
      }
      console.log(data);
    });
    this.dashboardFragService.getByAtelier('vauban', this.year.yearD, this.week).subscribe(data => {
      if (data != null) {
        this.fragDashboardVauban = data;
      }
      console.log(data);
    });
    this.dashboardFragService.getByAtelier('test', this.year.yearD, this.week).subscribe(data => {
      if (data != null) {
        this.fragDashboardTest = data;
      }
      console.log(data);
    });
    this.dashboardFragService.getByAtelier('technique', this.year.yearD, this.week).subscribe(data => {
      if (data != null) {
        this.fragDashboardTechnique = data;
      }
      console.log(data);
    });
    this.dashboardFragService.getByAtelier('magasin', this.year.yearD, this.week).subscribe(data => {
      if (data != null) {
        this.fragDashboardMagasin = data;
      }
      console.log(data);
    });
    this.dashboardFragService.getByAtelier('eiffel', this.year.yearD, this.week).subscribe(data => {
      if (data != null) {
        this.fragDashboardEiffel = data;
      }
      console.log(data);
    });
  }

  init() {
    this.dashboardFragService.getByAtelier('cms', new Date().getFullYear(), this.currentWeek).subscribe(data => {
      if (data == null) {
        console.log('data not found');
      }
      console.log(data);
      if (data != null) {
        this.fragDashboardCMS = data;
      }
    });
    this.dashboardFragService.getByAtelier('vauban', new Date().getFullYear(), this.currentWeek).subscribe(data => {
      if (data == null) {
        console.log('data not found');
      }
      console.log(data);
      if (data != null) {
        this.fragDashboardVauban = data;
      }
    });
    this.dashboardFragService.getByAtelier('technique', new Date().getFullYear(), this.currentWeek).subscribe(data => {
      if (data == null) {
        console.log('data not found');
      }
      console.log(data);
      if (data != null) {
        this.fragDashboardTechnique = data;
      }
    });
    this.dashboardFragService.getByAtelier('magasin', new Date().getFullYear(), this.currentWeek).subscribe(data => {
      if (data == null) {
        console.log('data not found');
      }
      console.log(data);
      if (data != null) {
        this.fragDashboardMagasin = data;
      }
    });
    this.dashboardFragService.getByAtelier('test', new Date().getFullYear(), this.currentWeek).subscribe(data => {
      if (data == null) {
        console.log('data not found');
      }
      console.log(data);
      if (data != null) {
        this.fragDashboardTest = data;
      }
    });
    this.dashboardFragService.getByAtelier('eiffel', new Date().getFullYear(), this.currentWeek).subscribe(data => {
      if (data == null) {
        console.log('data not found');
      }
      console.log(data);
      if (data != null) {
        this.fragDashboardEiffel = data;
      }
    });
  }

  ngOnInit() {
    this.userservice.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.roles);
      this.isAdmin = data.roles.includes('ADMIN');
    });
  }

  searchForOtd() {
    if (this.weekFirst.weekFirstOtd < this.weekFin.weekFinOtd) {
      this.serviceOtd.getAll(this.atelier.atelierOtd, this.year.yearOtd).subscribe(data => {
        if (Object.keys(data).length === 0) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.DataOtd = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst.weekFirstOtd) {
              if (obj.week <= this.weekFin.weekFinOtd) {
                this.DataOtd.push([obj.week, Number(obj.otdRealise), Number(obj.objectif)]);
                console.log(this.DataOtd);
              }
            }
          });

          this.stackedChartOtd = {
            title: 'OTD [ Semaine: [S' + this.weekFirst.weekFirstOtd + ', S' + this.weekFin.weekFinOtd + '] , Année: [' + this.year.yearOtd + ']].',
            typeChart: 'AreaChart',
            columnNames: ['Semaine', 'Realisation', 'Objectif'],
            options: {
              hAxis: {
                title: 'Semaine',
              },
              vAxis: {title: 'Otd (%)'},
            },
            width: 550,
            height: 400,
            data: this.DataOtd,
          };
        }
      });
    } else {
      this.toastr.info('le premier semaine doit être inférieur au dernier', 'Attention');
    }
    this.init();
  }

  searchForPcd() {
    if (this.weekFirst.weekFirstsPcd < this.weekFin.weekFinPcd) {
      this.servicePcd.getAll(this.atelier.atelierPcd, this.year.yearPcd).subscribe(data => {
        if (Object.keys(data).length === 0) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          console.log(this.DataPcd);
          this.DataPcd = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst.weekFirstsPcd) {
              if (obj.week <= this.weekFin.weekFinPcd) {
                this.DataPcd.push([obj.week, Number(obj.objectifEuro), Number(obj.pcdEuro)]);
                console.log(this.DataPcd);
              }
            }
          });

          this.stackedChartPcd = {
            title: 'PCD [ Semaine: [S' + this.weekFirst.weekFirstsPcd + ', S' + this.weekFin.weekFinPcd + '] , Année: [' + this.year.yearPcd + ']].',
            typeChart: 'AreaChart',
            columnNames: ['Semaine', 'Pcd (Euro)', 'Objectif (Euro)'],
            options: {
              hAxis: {
                title: 'Semaine',
              },
              vAxis: {title: 'Pcd (Euro)'},
            },
            width: 550,
            height: 400,
            data: this.DataPcd,
          };
        }
      });
    } else {
      this.toastr.info('le premier semaine doit être inférieur au dernier', 'Attention');
    }
    this.init();
  }

  searchForEHV() {
    if (this.weekFirst.weekFirstEVH < this.weekFin.weekFinEVH) {
      this.serviceEVH.getAll(this.year.yearEVH).subscribe(data => {
        if (Object.keys(data).length === 0) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.DataEHVC = [];
          this.DataEVHH = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst.weekFirstEVH) {
              if (obj.week <= this.weekFin.weekFinEVH) {
                this.DataEHVC.push([obj.week, Number(obj.heuresCDE), Number(obj.heuresPrevus)]);
                this.DataEVHH.push([obj.week, Number(obj.budjet), Number(obj.facture)]);
              }
            }
          });

          this.stackedChartEVH1 = {
            title: 'Evalution par heure [ Semaine: [S' + this.weekFirst.weekFirstEVH + ', S' + this.weekFin.weekFinEVH + '] , Année: [' + this.year.yearEVH + ']].',
            typeChart: 'AreaChart',
            columnNames: ['Semaine', 'Budjet', 'Facturées'],
            options: {
              hAxis: {
                title: 'Semaine',
              },
              vAxis: {title: 'Paramètres (Euro)'},
            },
            width: 550,
            height: 400,
            data: this.DataEHVC,
          };
          this.stackedChartEVH2 = {
            title: 'Evalution par heure  [ Semaine: [S' + this.weekFirst.weekFirstEVH + ', S' + this.weekFin.weekFinEVH + '] , Années: [' + this.year.yearEVH + ']].',
            typeChart: 'AreaChart',
            columnNames: ['Semaine', 'CDE (H)', 'CDE (H)'],
            options: {
              hAxis: {
                title: 'Semaine',
              },
              vAxis: {title: 'Paramètres (H)'},
            },
            width: 550,
            height: 400,
            data: this.DataEVHH,
          };
        }
      });
    } else {
      this.toastr.info('le premier semaine doit être inférieur au dernier', 'Attention');
    }
    this.init();
  }

  searchForTrs() {
    if (this.weekFirst.weekFirstsTrs < this.weekFin.weekFinTrs) {
      this.serviceTrs.get(this.year.yearTrs).subscribe(data => {
        if (Object.keys(data).length === 0) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.DataTrs = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst.weekFirstsTrs) {
              if (obj.week <= this.weekFin.weekFinTrs) {
                this.DataTrs.push([obj.week, Number(obj.objectif), Number(obj.trsRealise)]);
              }
            }
          });

          this.stackedChartTrs = {
            title: 'Trs [ Semaine: [S' + this.weekFirst.weekFirstsTrs + ', S' + this.weekFin.weekFinTrs + '] , Années: [' + this.year.yearTrs + ']].',
            typeChart: 'AreaChart',
            columnNames: ['Semaine', 'Budjet', 'Facturées'],
            options: {
              hAxis: {
                title: 'Semaine',
              },
              vAxis: {title: 'Paramètres (Euro)'},
            },
            width: 550,
            height: 400,
            data: this.DataTrs,
          };
        }
      });
    } else {
      this.toastr.info('le premier semaine doit être inférieur au dernier', 'Attention');
    }
    this.init();
  }

  changeDeviceStatus(event) {
    this.devicesService.edit(event)
        .pipe(takeWhile(() => true))
        .subscribe();
  }

  chart(event) {
    this.router.navigateByUrl( 'pages/atelierChart' , {queryParams: { data: event}});
 }

  dashboard() {
    this.router.navigateByUrl( 'pages/atelierInfo' );
  }
}
