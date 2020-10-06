import {Component, Input, OnInit} from '@angular/core';
import {PcdWeek} from '../../model/PcdWeek';
import {PcdWeekService} from '../../../@core/backend/common/services/PcdWeek.service';
import {ToastrService} from 'ngx-toastr';
import {LocalDataSource} from 'ng2-smart-table';
import {NbThemeService} from '@nebular/theme';
import {Subscription} from 'rxjs';
import {WeekMonthService} from '../../../@core/backend/common/services/WeekMonth.Service';
import {ConfigOtdService} from '../../../@core/backend/common/services/ConfigOtd.service';
import {UsersService} from '../../../@core/backend/common/services/users.service';

@Component({
  selector: 'ngx-pcd-w',
  templateUrl: './pcd-w.component.html',
  styleUrls: ['./pcd-w.component.scss'],
  providers: [PcdWeekService, WeekMonthService, ConfigOtdService, UsersService],
})
export class PcdWComponent implements OnInit {
  pcdWeek: PcdWeek = new PcdWeek();
  OBJECTIF_EURO: number;
  OBJECTIF_QTE: number;
  @Input('atelier') atelier: string;
  data: any;
  options: any;
  settings = {
    actions: {
      add: false,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
      mode: 'inline',
    },

    columns: {
      year: {
        title: 'Année',
        type: 'numbre',
        editable: false,
      },
      week: {
        title: 'semaine',
        type: 'numbre',
        editable: false,
      },
      objectifEuro: {
        title: 'Objectif Euro',
        type: 'numbre',
      },
      objectifQte: {
        title: 'Objectif Qte',
        type: 'numbre',
      },
      pcdEuro: {
        title: 'PCD Euro',
        type: 'numbre',
      },
      pcdQte: {
        title: 'PCD Qte',
        type: 'numbre',
      },
      ecartEuro: {
        title: 'Ecart Euro',
        type: 'numbre',
      },
      ecartQte: {
        title: 'Ecart Euro',
        type: 'numbre',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  private total: any;
  private count: number;
  private lenght: number;
  private themeSubscription: Subscription;
  weekFirst: any;
  weekFin: any;
  year: any;
  stackedChart = {
    title: 'Otd par Semaine',
    typeChart: 'AreaChart',
    columnNames: ['Semaine', 'Pcd (Euro)', 'Objectif (Euro)'],
    options: {
      hAxis: {
        title: 'Semaine',
      },
      vAxis: {title: ''},
    },
    width: 1000,
    height: 400,
    data: [['0', 0, 0]],
  };
  chartType = [{type: 'LineChart', name: 'Line'}, {type: 'AreaChart', name: 'Area '}, {type: 'BarChart', name: 'Bar'},
    {type: 'ColumnChart', name: 'Column'}];
  Data = [];
  isGranted: boolean;
  isAdmin: boolean;
  Week = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];

  constructor(private theme: NbThemeService, private service: PcdWeekService, private toaster: ToastrService, private weekService: WeekMonthService,
              private configPcdService: ConfigOtdService, private userservice: UsersService) {
  }

  init() {
    this.service.getAll(this.atelier, (new Date).getFullYear()).subscribe(data => {
      console.log('data ', data);
      this.source = data;
    });
    this.configPcdService.getAll(this.atelier, (new Date()).getFullYear()).subscribe(obj => {
      this.pcdWeek.objectifQte = obj.objectifQte;
      this.OBJECTIF_QTE = obj.objectifQte;
      this.pcdWeek.objectifEuro = obj.objectifEuro;
      this.OBJECTIF_EURO = obj.objectifEuro;
    });
    this.pcdWeek = new PcdWeek();
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

  save() {
    this.pcdWeek.ecartQte = this.pcdWeek.objectifQte - this.pcdWeek.pcdQte;
    this.pcdWeek.ecartEuro = this.pcdWeek.objectifEuro - this.pcdWeek.pcdEuro ;
    this.pcdWeek.atelier = this.atelier;
    this.pcdWeek.year = (new Date).getFullYear();
    console.log(this.pcdWeek);
    this.service.getAllByWeek( this.atelier , this.pcdWeek.year , this.pcdWeek.week).subscribe( data => {
      console.log(data);

      if (data === null ) {
      this.service.create(this.pcdWeek).subscribe(obj => {
      });
      this.toaster.success('ajouté avec succé', 'create');
      } else {
        this.toaster.warning('les données concernant la semaine que vous insérez sont existe dans la base de donnes ', 'Attention');
      }

      this.init();
      this.init();
    });

  }

  onCreateConfirm(event: any) {
    event.newData.ecartQte = event.newData.objectifQte - event.newData.pcdQte ;
    event.newData.ecartEuro = event.newData.objectifEuro - event.newData.pcdEuro;
    event.newData.atelier = event.newData.atelier;
    event.newData.year = (new Date).getFullYear();
    this.service.getAllByWeek( event.newData.atelier , event.newData.year , event.newData.week).subscribe( data => {
      if (data === null ) {
        event.confirm.resolve(event.newdata);
        this.service.create(event.newData).subscribe(obj => {});
        this.toaster.success('', 'Create');
        this.init();
        this.init();
      } else {
        this.toaster.warning('les données concernant la semaine que vous insérez sont existe dans la base de donnes ', 'Attention');
      }
    });
  }
  refreshData () {
    this.service.get(this.atelier).subscribe( data => { this.source = data; });
  }
  onDeleteConfirm(event: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      this.service.delete(event.data.id).subscribe(data => {});
      this.toaster.warning('les donnés suppremé ', 'Attention');
      this.refreshData();
      this.refreshData();
    } else {
      event.confirm.reject(event.data);
    }
  }

  onSaveConfirm(event: any) {
    event.newData.ecartQte = event.newData.pcdQte - event.newData.objectifQte;
    event.newData.ecartEuro = event.newData.pcdEuro - event.newData.objectifEuro;
    event.newData.atelier = event.newData.atelier;
    event.confirm.resolve(event.data);
    this.service.update (event.newData.id).subscribe(data => {
    });
    this.toaster.info('', 'Update');
    this.init();
    this.init();
  }

  searchFor() {
    if (this.weekFirst < this.weekFin) {
      this.service.getAll(this.atelier, this.year).subscribe(data => {
        if (Object.keys(data).length === 0) {
          this.toaster.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.Data = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst) {
              if (obj.week <= this.weekFin) {
                this.Data.push([obj.week, Number(obj.objectifEuro), Number(obj.pcdEuro)]);
                console.log(this.Data);
              }
            }
          });

          this.stackedChart = {
            title: 'OTD [ Semaine: [S' + this.weekFirst + ', S' + this.weekFin + '] , Années: [' + this.year + ']].',
            typeChart: 'AreaChart',
            columnNames: ['Semaine', 'Pcd (Euro)', 'Objectif (Euro)'],
            options: {
              hAxis: {
                title: 'Semaine',
              },
              vAxis: {title: 'Pcd (Euro)'},
            },
            width: 1000,
            height: 400,
            data: this.Data,
          };
        }
      });
    } else {
      this.toaster.info('le premier semaine doit être inférieur au dernier', 'Attention');
    }
    this.init();
  }

  reset() {
    this.pcdWeek = new PcdWeek();
  }
}

