import {Component, Input, OnInit} from '@angular/core';
import {OtdW} from '../../model/otdW';
import {OtdWeekService} from '../../../@core/backend/common/services/OtdWeek.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {LocalDataSource} from 'ng2-smart-table';
import {ConfigPcdWService} from '../../../@core/backend/common/services/ConfigPcdW.service';
import {UsersService} from '../../../@core/backend/common/services/users.service';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
@Component({
  selector: 'ngx-otd-w',
  templateUrl: './otd-w.component.html',
  styleUrls: ['./otd-w.component.scss'],
  providers: [OtdWeekService , ConfigPcdWService, UsersService],
})
export class OtdWComponent implements OnInit {
  @Input() atelier: string;
  otdW: OtdW = new OtdW();
  isGranted: boolean;
  isAdmin: boolean;
  private data: any;
  OBJECTIF: number;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
      mode: 'inline',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,

    },
    columns: {
      year: {
        title: 'Année',
        type: 'number',
        editable: false,
      },
      week: {
        title: 'Semaine',
        type: 'number',
        editable: false,
      },
      otdRealise: {
        title: 'OTD Realise',
        type: 'number',
      },
      objectif: {
        title: 'OTD Objectif',
        type: 'number',
      },
      ecart: {
        title: 'Ecart',
        type: 'number',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  options: any;
  year: number = new Date().getFullYear();
  weekFin: any;
  weekFirst: any;
  Data = [];
  collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];




  constructor(private theme: NbThemeService, private service: OtdWeekService, private toastr: ToastrService, private router: Router,
              private configOtdService: ConfigPcdWService, private userService: UsersService) {
  }

  init() {
    this.userService.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.roles);
      this.isGranted = data.roles.includes(this.atelier.toLocaleUpperCase());
      this.isAdmin = data.roles.includes('ADMIN');
    });
    this.service.get(this.atelier).subscribe(data => {this.source = data;
    });
    this.configOtdService.getAll(this.atelier , (new Date()).getFullYear()).subscribe( obj => {
      this.otdW.objectif = obj.objectif;
      this.OBJECTIF = obj.objectif;
    });
  }

  ngOnInit() {
    this.init();
  }
  refreshData () {
    this.service.get(this.atelier).subscribe(data => {this.source = data;
    });
    this.otdW = new OtdW();
  }
  save() {
    if (this.otdW.week) {
      this.service.getAllByWeek(this.atelier , (new Date).getFullYear() , this.otdW.week).subscribe( data => {
        console.log(this.otdW.week);
        console.log(data);
        if  ( data === null) {
          this.otdW.ecart = Number((this.OBJECTIF - this.otdW.otdRealise) .toFixed(2));
          this.otdW.atelier = this.atelier;
          this.service.create(this.otdW).subscribe(obj => {
          });
          this.toastr.success('ajouté avec succé', 'create');
          this.refreshData();
        } else {
          this.toastr.warning('les données concernant la semaine que vous insérez sont existe dans la base de donnes ', 'Attention');
        }
      });
    } else {
      this.toastr.warning('les données concernant la semaine que vous insérez n\'est pas correct', 'Attention');
    }
    this.configOtdService.getAll(this.atelier , (new Date()).getFullYear()).subscribe( obj => {
      this.otdW.objectif = obj.objectif;
    });
  }

  createConfirm(event: any) {
    if (this.otdW.week) {
    this.service.getAllByWeek(this.atelier , (new Date).getFullYear() , event.newData.week).subscribe( data => {
      console.log(event.newData.week);
      console.log(data);
      if  ( Object.keys(data).length === 0 ) {
        event.newData.ecart = Number(((event.newData.objectif - event.newData.otdRealise) * 100 / event.newData.objectif).toFixed(2));
        event.newData.atelier = this.atelier;
        event.confirm.resolve(event.newData);
        this.service.create(event.newData).subscribe(obj => {});
        this.toastr.success('ajouté avec succé', 'create');
        this.init();
      } else {
        this.toastr.warning('les données concernant la semaine que vous insérez sont existe dans la base de donnes ', 'Attention');
      }
    });
    } else {
      this.toastr.warning('les données concernant la semaine que vous insérez n\'est pas correct', 'Attention');
    }
  }

  onDeleteConfirm(event: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      this.service.delete(event.data.id).subscribe(data => {});
      this.toastr.warning('les donnés suppremé ', 'Attention');
      this.refreshData();
      this.refreshData();
    } else {
      event.confirm.reject(event.data);
    }


  }
  onSaveConfirm(event: any) {
        event.newData.ecart = Number(((event.newData.objectif - event.newData.otdRealise) * 100 / event.newData.objectif).toFixed(2));
        event.newData.atelier = this.atelier;
        event.confirm.resolve(event.newData);
        this.service.update(event.newData).subscribe(obj => {});
        this.toastr.info('modifé les donnes  ', 'update');
        this.init();
        this.refreshData();
  }

  reset() {
  }
}

