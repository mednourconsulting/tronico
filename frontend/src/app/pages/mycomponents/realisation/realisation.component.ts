import {Component, Input, OnInit} from '@angular/core';
import {RealisationW} from '../../model/RealisationW';
import {RealisationWeekService} from '../../../@core/backend/common/services/RealisationWeek.service';
import {ToastrService} from 'ngx-toastr';
import {LocalDataSource} from 'ng2-smart-table';
import {NbThemeService} from '@nebular/theme';
import {WeekMonthService} from '../../../@core/backend/common/services/WeekMonth.Service';
import {UsersService} from '../../../@core/backend/common/services/users.service';

@Component({
  selector: 'ngx-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.scss'],
  providers: [RealisationWeekService, WeekMonthService, UsersService],
})
export class RealisationComponent implements OnInit {
  @Input() atelier: string;
  isGranted: boolean;
  atl = this.atelier;
  isAdmin: boolean;
  realisationW: RealisationW = new  RealisationW();
  source: LocalDataSource = new LocalDataSource();
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
      heuresRealise: {
        title: 'Réalisation (Heure)',
        type: 'number',
      },
      objectif: {
        title: 'Objéctif (Heure)',
        type: 'number',
      },
      ecart: {
        title: 'Ecart (%)',
        type: 'number',
        editable: false,
      },
    },
  };
  options: any;
  Data = [];
  data: any;
  themeSubscription: any;
  collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  weekFin =  52;
  weekFirst = 1;
  year = new Date().getFullYear();
  chartType =  [{type : 'LineChart', name : 'Line'}, {type : 'AreaChart', name : 'Area '}, {type : 'BarChart' , name : 'Bar'},
    {type : 'ColumnChart' , name : 'Column'} ] ;
  stackedChart = {
    title: 'Realisation',
    typeChart: 'AreaChart',
    columnNames: ['Semaine', 'Objectif', 'Realisation'],
    options : {
      hAxis: {
        title: 'Semaine'},
      vAxis: {title: 'Realisation (Heure)'},
    },
    width : 1000,
    height : 400, data : [['0', 0, 0]],
  };


  constructor(private theme: NbThemeService, private service: RealisationWeekService, private userservice: UsersService,
              private toastr: ToastrService, private weekService: WeekMonthService) {
  }


  init() {
    this.service.getAll(this.atelier , (new Date).getFullYear()).subscribe(data => {
      this.source = data;
    });
  }

  ngOnInit() {
    this.userservice.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.roles);
      this.isGranted = data.roles.includes(this.atelier.toLocaleUpperCase());
      this.isAdmin = data.roles.includes('ADMIN');
    });
    this.init();
  }
  createConfirm(event: any) {
    if (event.newData.week) {
      this.service.getAllWeek(this.atelier , (new Date).getFullYear() , event.newData.week).subscribe( data => {
        console.log(event.newData.week);
        console.log(data);
        if  ( Object.keys(data).length === 0 ) {
    event.newData.ecart = event.newData.objectif - event.newData.heuresRealise;
    event.confirm.resolve(event.newData);
    this.service.create(event.newData).subscribe(obj => {});
    this.toastr.info('', 'Update');
    this.ngOnInit();
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
    event.confirm.resolve(event.newData);
    this.service.delete(event.Data.id).subscribe(data => { });
    this.toastr.warning('', 'Delete');
    } else {
      event.confirm.reject(event.data);
    }

  }

  save() {
    this.service.getAllWeek(this.atelier , (new Date).getFullYear() , this.realisationW.week).subscribe( data => {
      if  (Object.keys(data).length === 0) {
    this.realisationW.ecart = this.realisationW.objectif - this.realisationW.heuresRealise;
    this.realisationW.atelier = this.atelier;
    this.realisationW.year = new Date().getFullYear();
    this.service.create(this.realisationW).subscribe(obj => { console.log(this.realisationW); });
    this.toastr.success('Ajouté avec succès', 'create');
        } else {
          this.toastr.warning('les données concernant la semaine que vous insérez sont existe dans la base de donnes ', 'Attention');
        }
      });
    this.ngOnInit();
  }
  onSaveConfirm(event: any) {
    if (event.newData.week) {
      this.service.getAllWeek(this.atelier , (new Date).getFullYear() , event.newData.week).subscribe( data => {
        console.log(event.newData.week);
        console.log(data);
        if  (data !== null ) {
    event.newData.atelier = this.atelier;
    event.newData.ecart = event.newData.objectif - event.newData.heuresRealise;
    event.confirm.resolve(event.newData);
    this.service.update(event.newData).subscribe(obj => {});
    this.toastr.info('modifé les donnes  ', 'update');
    this.init();
        } else {
          this.toastr.warning('les données concernant la semaine que vous insérez sont existe dans la base de donnes ', 'Attention');
        }
      });
    } else {
      this.toastr.warning('les données concernant la semaine que vous insérez n\'est pas correct', 'Attention');
    }
  }

  searchFor() {
    if (this.weekFirst <= this.weekFin ) {
      this.service.getAll( this.atelier , this.year ).subscribe( data => {
        if (Object.keys(data).length === 0 ) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.Data = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst) {
              if (obj.week <= this.weekFin) {
                this.Data.push([obj.week, Number(obj.heuresRealise), Number(obj.objectif)]);
                console.log(this.Data);
              }
            }
          });

          this.stackedChart = {
            title: 'Realisation [ Semaine: [S' + this.weekFirst + ', S' + this.weekFin + '] , Années: [' + this.year + '] ].',
            typeChart: 'AreaChart',
            columnNames: ['Semaine', 'Realisation', 'Objectif' ],
            options : {
              hAxis: {
                title: 'Semaine'},
              vAxis: {title: 'Realisation (Heure)'},
            },
            width : 1000,
            height : 400,
            data : this.Data,
          };
        }});
    } else {
      this.toastr.info('le premier semaine doit être inférieur au dernier', 'Attention');
    }
    this.ngOnInit();
  }

  search() {
    this.service.getAll(this.atelier, this.year).subscribe( data => { this.source = data; });
  }

  reset() {
    this.realisationW =  new RealisationW();
  }
}

