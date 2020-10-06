import {Component, OnInit} from '@angular/core';
import {Evolutionheures} from '../../model/evolutionheures';
import {LocalDataSource} from 'ng2-smart-table';
import {BarChartData} from '../../../@core/backend/common/services/BarChartData';
import {NbThemeService} from '@nebular/theme';
import {EvolutionheuresService} from '../../../@core/backend/common/services/evolutionheures.service';
import {ToastrService} from 'ngx-toastr';
import {UsersService} from '../../../@core/backend/common/services/users.service';

@Component({
  selector: 'ngx-evolutionheures',
  templateUrl: './evolutionheures.component.html',
  styleUrls: ['./evolutionheures.component.scss'],
  providers: [EvolutionheuresService, UsersService],
})
export class EvolutionheuresComponent implements OnInit {
  isAdmin: boolean;
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
      budjet: {
        title: 'Budjet',
        type: 'number',
      },
      heuresCDE: {
        title: 'Heures en CDE',
        type: 'number',
      },
      heuresPrevus: {
        title: 'Heures pévus',
        type: 'number',
      },
      facture: {
        title: 'Facturées',
        type: 'number',
      },
      ecart: {
        title: 'Ecart',
        type: 'number',
        editable: false,
      },
    },
  };
  currentYear = new Date().getFullYear();
  evolutionheures: Evolutionheures = new Evolutionheures();
  evh: Evolutionheures;
  source: LocalDataSource = new LocalDataSource();
  chartdata: any;
  options: any;
  themeSubscription: any;
  round: any = 'plus-round';
  data: any;
  chartData: BarChartData;
  single: any[];
  multi: any[];
  year: any;
  weekFin: any;
  weekFirst: any;
  stackedChart = {
    title: 'Evolution Heures',
    typeChart: 'AreaChart',
    columnNames: ['Semaine', 'Budjet', 'Facturées'],
    options : {
      hAxis: {
        title: 'Semaine'},
      vAxis: {title: 'Parametre'},
    },
    width : 1000,
    height : 400,
    data : [['0', 0, 0]],
  };
  stackedChart1 = {
    title: 'Evolution Heures',
    typeChart: 'AreaChart',
    columnNames: ['Semaine', 'Heures en CDE', 'Heures prévus'],
    options : {
      hAxis: {
        title: 'Semaine'},
      vAxis: {title: 'Parametre (H)'},
    },
    width : 1000,
    height : 400,
    data : [['0', 0 , 0]],
  };
  chartType =  [{type : 'LineChart', name : 'Line'}, {type : 'AreaChart', name : 'Area '}, {type : 'BarChart' , name : 'Bar'},
    {type : 'ColumnChart' , name : 'Column'} ] ;
  Data = [];
  Data1 = [];
  collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  constructor(private theme: NbThemeService, private service: EvolutionheuresService, private userservice: UsersService,
              private toastr: ToastrService) {
  }

  reset() {
    this.evolutionheures = new Evolutionheures();
  }

  addToList() {
    this.service.getAllByWeek(this.currentYear, this.evolutionheures.week).subscribe( data => {
      console.log(data);
      if (data === null) {
        this.evolutionheures.ecart = this.evolutionheures.facture - this.evolutionheures.budjet;
        this.service.create(this.evolutionheures).subscribe(obj => {});
        this.reset();
        this.toastr.success('Les données ont été ajoutées avec succès à la base de données', 'Ajouter');
        } else {
        this.toastr.warning('les données sont déjà dans la base de données', 'Attention');
        }
  });
  }

  onRowSelect(event) {
    this.evh = this.service.clone(event.data);
  }

  init() {
    this.service.getAll((new Date).getFullYear()).subscribe(data => {
      this.source = data;
    });
  }

  ngOnInit() {
    this.userservice.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.roles);
      this.isAdmin = data.roles.includes('ADMIN');
    });
    this.init();
    this.evolutionheures = new Evolutionheures();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      this.service.delete(event.data.id).subscribe(data => {
        console.log(data);
      });
    } else {
      event.confirm.reject(event.data);
    }
  }

  onEditConfirm(event) {
    this.service.getAllByWeek(event.newData.year, event.newData.week).subscribe( data => {
      console.log(data);
      if (data === null) {
        event.newData.ecart = event.newData.facture - event.newData.budjet;
        event.confirm.resolve(event.newData);
        this.service.update(event.newData).subscribe(obj => {
        });
        this.toastr.info('Changé avec succès', 'modification');
        this.init();
      } else {
        console.log('pass');
        if (event.newData.week === event.data.week ) {
          console.log('pass');
            event.newData.ecart = event.newData.facture - event.newData.budjet;
            event.confirm.resolve(event.newData);
            this.service.update(event.newData).subscribe(obj => {
            });
            this.toastr.info('Changé avec succès', 'modification');
            this.init();
        } else {
          this.toastr.warning('les données sont déjà dans la base de données', 'Attention');
        }
      }
    });
  }

  createConfirm(event) {
    this.service.getAllByWeek(this.currentYear, event.newData.week).subscribe(data => {
      if (data !== null) {
        this.toastr.warning('les données sont déjà dans la base de données', 'Attention');
      } else {
        event.newData.ecart = event.newData.facture - event.newData.budjet;
        event.confirm.resolve(event.newData);
        this.service.create(event.newData).subscribe(obj => {});
        this.toastr.info('', 'Create');
        this.init();
      }
    });
  }

  searchFor() {
    if (this.weekFirst < this.weekFin ) {
      this.service.getAll( this.year ).subscribe( data => {
        console.log(data);
        if (Object.keys(data).length === 0 ) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.Data = [];
          this.Data1 = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst) {
              if (obj.week <= this.weekFin) {
                this.Data.push([obj.week, Number(obj.heuresCDE), Number(obj.heuresPrevus)]);
                this.Data1.push([obj.week, Number(obj.budjet), Number(obj.facture)]);
                console.log(this.Data);
              }
            }
          });

          this.stackedChart = {
            title: 'Realisation [ Semaine: [S' + this.weekFirst + ', S' + this.weekFin + '] , Années: [' + this.year + ']].',
            typeChart: 'AreaChart',
            columnNames: ['Semaine', 'Budjet', 'Facturées'],
            options : {
              hAxis: {
                title: 'Semaine'},
              vAxis: {title: 'Paramètres (%)'},
            },
            width : 1000,
            height : 400,
            data : this.Data,
          };
          this.stackedChart1 = {
            title: 'Realisation [ Semaine: [S' + this.weekFirst + ', S' + this.weekFin + '] , Années: [' + this.year + ']].',
            typeChart: 'AreaChart',
            columnNames: ['Semaine', 'CDE (H)', 'CDE (H)'],
            options : {
              hAxis: {
                title: 'Semaine'},
              vAxis: {title: 'Paramètres (%)'},
            },
            width : 1000,
            height : 400,
            data : this.Data1,
          };
        }});
    } else {
      this.toastr.info('le premier semaine doit être inférieur au dernier', 'Attention');
    }
    this.init();
  }
}
