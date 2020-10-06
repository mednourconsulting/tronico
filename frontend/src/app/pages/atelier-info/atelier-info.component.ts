import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {DashboardFrag} from '../model/DashboardFrag';
import {ToastrService} from 'ngx-toastr';
import {PcdWeekService} from '../../@core/backend/common/services/PcdWeek.service';
import {OtdWeekService} from '../../@core/backend/common/services/OtdWeek.service';
import {EvolutionheuresService} from '../../@core/backend/common/services/evolutionheures.service';
import {Tra} from '../model/Tra';
import {DashboardFragService} from '../../@core/backend/common/services/DashboardFrag.service';
import {TrsCMSService} from '../../@core/backend/common/services/TrsCMS.service';
import {UsersService} from '../../@core/backend/common/services/users.service';
@Component({
  selector: 'ngx-atelier-info',
  templateUrl: './atelier-info.component.html',
  styleUrls: ['./atelier-info.component.scss'],
})
export class AtelierInfoComponent implements OnInit {


  isAdmin: boolean;
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;
  fragDashboardCMS: DashboardFrag = new DashboardFrag();
  fragDashboardEiffel: DashboardFrag = new DashboardFrag();
  fragDashboardVauban: DashboardFrag = new DashboardFrag();
  fragDashboardTechnique: DashboardFrag = new DashboardFrag();
  fragDashboardMagasin: DashboardFrag = new DashboardFrag();
  fragDashboardTest: DashboardFrag = new DashboardFrag();
  weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  week: number;
  otdWeek: number;
  year = {yearOtd: (new Date).getFullYear(), yearPcd: (new Date).getFullYear(), yearD: (new Date).getFullYear(), yearEVH: (new Date).getFullYear(), yearTrs: (new Date).getFullYear()};
  currentWeek = 2019;
  tra: Tra = new Tra();
  date = new Date();

  constructor(private dashboardFragService: DashboardFragService,
              private serviceOtd: OtdWeekService, private toastr: ToastrService, private userservice: UsersService,
              private servicePcd: PcdWeekService, private serviceEVH: EvolutionheuresService, private serviceTrs: TrsCMSService , private router: Router , private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.userservice.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.role);
      this.isAdmin = data.role.includes('ADMIN');
    });
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
  chart(event) {
    console.log(event);
  }
}

