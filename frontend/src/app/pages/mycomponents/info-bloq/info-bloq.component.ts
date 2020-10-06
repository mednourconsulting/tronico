import {Component, Input, OnInit} from '@angular/core';
import {InfoBloqW} from '../../model/infoBloqW';
import {InfoBlqWService} from '../../../@core/backend/common/services/InfoBlqW.service';
import {ToastrService} from 'ngx-toastr';
import {LocalDataSource} from 'ng2-smart-table';
import {WeekMonthService} from '../../../@core/backend/common/services/WeekMonth.Service';
import {EmployeService} from '../../../@core/backend/common/services/EmployeService';
import {UsersService} from '../../../@core/backend/common/services/users.service';

@Component({
  selector: 'ngx-info-bloq',
  templateUrl: './info-bloq.component.html',
  styleUrls: ['./info-bloq.component.scss'],
  providers: [InfoBlqWService , WeekMonthService, EmployeService, UsersService],
})
export class InfoBloqComponent implements OnInit {

  @Input('atelier') atelier: string;
  infoBloq: InfoBloqW = new InfoBloqW();
  collection = [];
  isGranted: boolean;
  isAdmin: boolean;
  list: InfoBloqW[];
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
      },
      week: {
        title: 'SEMAINE',
        type: 'number',
      },
      fmq: {
        title: 'FAITS MARQUANTS',
        type: 'number',
      },
      sujetSupport: {
        title: 'SUJET DONT BESOIN EN SUPPORT',
        type: 'number',
      },
      qui: {
        title: 'QUI',
        type: 'number',
      },
      bloquantEuro: {
        title: 'BLOQUANTS EURO',
        type: 'number',
      },
      actMenees: {
        title: 'ACTIONS MENEES',
        type: 'number',
      },
      delai: {
        title: 'DELAI',
        type: 'number',
      },
      tauxAbst: {
        title: 'TAUX ABS',
        type: 'number',
      },
      escalader: {
        title: 'ESCALADER',
        type: 'number',
      },
      abstRaison: {
        title: 'ABSENTEISME RAISON',
        type: 'number',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  Week = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  currentYear = (new Date).getFullYear();
  year: any;
  constructor(private userservice: UsersService, private service: InfoBlqWService, private toastr: ToastrService, private service_week: WeekMonthService, private serviceEmploye: EmployeService) {

    this.serviceEmploye.getAll().subscribe(data => {
      data.forEach( obj => {
        this.collection.push({title: obj.employe});
      });
    });

  }
  init() {
    this.service.getAll(this.atelier , this.currentYear).subscribe(data => { this.source = data;
    console.log(data); });
  }
  ngOnInit() {
    this.userservice.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.roles);
      this.isGranted = data.roles.includes(this.atelier.toLocaleUpperCase());
      this.isAdmin = data.roles.includes('ADMIN');
    });
    this.init();
    this.infoBloq =  new InfoBloqW();
  }

  save() {
    this.infoBloq.atelier = this.atelier;
    this.infoBloq.year = new Date().getFullYear();
    this.service.create(this.infoBloq).subscribe(obj => {});
    this.toastr.success('Ajoué avec succès', 'Ajout');
    this.ngOnInit();
    // this.source.refresh();
  }

  onRowSelect($event: any) {
  }
  createConfirm(event: any) {
    event.newData.atelier = this.atelier;
    event.confirm.resolve(event.newData);
    this.service.create(event.newData).subscribe(obj => {});
    this.ngOnInit();
    this.toastr.success('ajouté avec succé', 'create');
  }

  onDeleteConfirm(event: any) {
    event.confirm.resolve(event.data);
    this.service.delete(event.data.id).subscribe(data => {});
    this.toastr.warning('les donnés suppremé ', 'delete');
  }
  onSaveConfirm(event: any) {
    event.newData.atelier = this.atelier;
    event.confirm.resolve(event.newData);
    this.service.update(event.data.id , event.newData).subscribe(obj => {});
    this.toastr.info('modifé les donnes  ', 'update');
    this.ngOnInit();
  }




  onCreateConfirm(event: any) {
    event.confirm.resolve(event.newData);
    event.newData.ecart = event.newData.objectif - event.newData.heuresRealise;
    this.service.create(event.newData).subscribe(data => {});
    this.init();
    this.toastr.info('modifé les donnes  ', 'update');

  }

  search() {
    this.service.getAll(this.atelier, this.year).subscribe( data => { this.source = data; });
  }

    reset() {
    this.infoBloq = new InfoBloqW();   }
}
