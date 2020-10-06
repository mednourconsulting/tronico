import {Component, Input, OnInit} from '@angular/core';
import {TrsCMS} from '../../model/TrsCMS';
import {TrsCMSService} from '../../../@core/backend/common/services/TrsCMS.service';
import {LocalDataSource} from 'ng2-smart-table';
import {ConfigTrsService} from '../../../@core/backend/common/services/ConfigTrsService';
import {Toast, ToastrService} from 'ngx-toastr';
import {UsersService} from '../../../@core/backend/common/services/users.service';

@Component({
  selector: 'ngx-trs-cms',
  templateUrl: './trs-cms.component.html',
  styleUrls: ['./trs-cms.component.scss'],
  providers: [TrsCMSService, ConfigTrsService , UsersService],
})
export class TrsCMSComponent implements OnInit {
  @Input() atelier: string;
  trsCMS: TrsCMS = new TrsCMS();
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
      trsRealise: {
        title: 'TRS Realise',
        type: 'number',
      },
      objectif: {
        title: 'TRS Objectif',
        type: 'number',
        editable: false,
      },
      ecart: {
        title: 'Ecart',
        type: 'number',
        editable: false,
      },
    },
  };
  collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  weekFirst: number;
  weekFin: number;
  year: number = new Date().getFullYear();
  chartType = [{type: 'LineChart', name: 'Line'}, {type: 'AreaChart', name: 'Area '}, {type: 'BarChart', name: 'Bar'},
    {type: 'ColumnChart', name: 'Column'}];
  Data = [];
  source: LocalDataSource = new LocalDataSource();
  stackedChart = {
    title: 'Trs par Semaine',
    typeChart: 'AreaChart',
    columnNames: ['Semaine', 'Objectif(%)', 'Realisation(%)'],
    options : {
      hAxis: {
        title: 'Semaine'},
      vAxis: {title: 'Trs Realisation (%)'},
    },
    width : 1000,
    height : 400,
    data : [['0', 0, 0]],
  };
  isAdmin: any;
  isGranted: any;
  constructor(private trsService: TrsCMSService, private configTrsService: ConfigTrsService, private toastr: ToastrService, private userservice: UsersService) {
  }

  ngOnInit() {
    this.userservice.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.roles);
      this.isGranted = data.roles.includes(this.atelier.toLocaleUpperCase());
      this.isAdmin = data.roles.includes('ADMIN');
    });
    this.configTrsService.findByYear(new Date().getFullYear()).subscribe(data => {
      console.log(data);
      if (data === null ) {
        this.toastr.success('L\'administrateur n\'a pas spécifié la valeur de l\'objet', 'Attetion');
      } else {
        this.trsCMS.objectif = data.objectif;
      }

    });
    this.trsService.getAll().subscribe( data => { this.source = data ; });
  }

  createConfirm(event: any) {
    this.trsService.findByYearByWeek(new Date().getFullYear()  , event.newData.week).subscribe( data => {
      if (data === null ) {
        this.trsService.create(event.newData).subscribe( obj => { });
        this.toastr.success('Objectif TRS est Ajoute ', 'Config TRS Ajouté');
      } else {
        this.toastr.success('Objectif TRS est Ajoute ', 'Attetion');
      }
    });
  }

  onDeleteConfirm(event: any) {
    if (window.confirm('Etes-vous sûr que vous voulez supprimer?')) {
      event.confirm.resolve(event.data);
      this.trsService.delete(event.data.id).subscribe(data => {});
      this.toastr.warning('Les données ont été supprimées avec succès ', 'Attention');
    } else {
      event.confirm.reject(event.data);
    }
  }

  save() {
    this.trsService.findByYearByWeek(new Date().getFullYear()  , this.trsCMS.week).subscribe( data => {
      if (data === null) {
        this.trsCMS.ecart = this.trsCMS.objectif - this.trsCMS.trsRealise ;
        this.trsService.create(this.trsCMS).subscribe(obj => {
        });
        this.toastr.success('Les données ont été ajoutées avec succès à la base de données', 'Ajouter');
         if ( this.trsCMS.ecart > 0 ) {
           this.toastr.warning('vous devez justifier le conflit dans les données car les données ne sont pas proches de "Objectif (%)" spécifié par l\'administrateur', 'Info');
         } else {
           this.toastr.info('Il n\'est pas nécessaire de justifier', 'Info');

         }
      } else {
        this.toastr.warning('les données de cette semaine sont déjà dans la base de données', 'Attention');
      }
    });
  }

  searchFor() {
    if (this.weekFirst < this.weekFin ) {
      this.trsService.get(this.year ).subscribe( data => {
        if (Object.keys(data).length === 0 ) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.Data = [];
          data.forEach(obj => {
            if (obj.week >= this.weekFirst) {
              if (obj.week <= this.weekFin) {
                this.Data.push([obj.week, Number(obj.objectif), Number(obj.trsRealise)]);
                console.log(this.Data);
              }
            }
          });

          this.stackedChart = {
            title: 'Trs [ Semaine: [S' + this.weekFirst + ', S' + this.weekFin + '] , Années: [' + this.year + ']].',
            typeChart: 'AreaChart',
            columnNames: ['Semaine', 'Realisation', 'Objectif' ],
            options : {
              hAxis: {
                title: 'Semaine'},
              vAxis: {title: 'Trs (%)'},
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
    this.trsService.get( this.year).subscribe( data => { this.source = data; });
  }
  onSaveConfirm(event: any) {
    this.trsService.findByYearByWeek(new Date().getFullYear()  , event.newData.week).subscribe( data => {
      if (data === null ) {
      event.confirm.resolve(event.newData);
        this.trsService.update(event.newData).subscribe( obj => { });
        this.toastr.success('Les données ont été modifiées avec succès', 'Modifier');
      } else {
        console.log(event.data.week);
        console.log(event.data.week);
        if (event.newData.week === event.data.week  ) {
          event.newData.ecart = event.newData.objectif - event.newData.trsRealise ;
          event.confirm.resolve(event.newData);
          console.log('pass');
          this.trsService.update(event.newData).subscribe( obj => { });
          this.toastr.success('Les données ont été modifiées avec succès', 'Modifier');
        } else {
          this.toastr.warning('les données de cette semaine sont déjà dans la base de données', 'Attention');
        }
      }
    });
  }

  reset() {
  }
}
