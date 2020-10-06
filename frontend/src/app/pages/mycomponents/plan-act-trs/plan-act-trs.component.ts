import {Component, Input, OnInit} from '@angular/core';
import {PlanActPcd} from '../../model/PlanActPcd';
import {ToastrService} from 'ngx-toastr';
import {LocalDataSource} from 'ng2-smart-table';
import {WeekMonthService} from '../../../@core/backend/common/services/WeekMonth.Service';
import {UsersService} from '../../../@core/backend/common/services/users.service';
import {PlanActTrsService} from '../../../@core/backend/common/services/PlanActTrs';
import {TrsCMSService} from '../../../@core/backend/common/services/TrsCMS.service';
import {PlanActTrs} from '../../model/PlanActTrs';

@Component({
  selector: 'ngx-plan-act-trs',
  templateUrl: './plan-act-trs.component.html',
  styleUrls: ['./plan-act-trs.component.scss'],
  providers: [TrsCMSService, PlanActTrsService, ToastrService, UsersService],
})
export class PlanActTrsComponent implements OnInit {
  planActTrsS: PlanActTrs [];
  planActTrs: PlanActTrs = new PlanActTrs();
  @Input('atelier') atelier: string;
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
      ecartEuro: {
        title: 'Ecart',
        type: 'number',
        editable: false,
      },
      produit: {
        title: 'produit',
        type: 'text',
      },
      besoin: {
        title: 'besoin',
        type: 'text',
      },
      cause: {
        title: 'cause',
        type: 'text',
      },
      action: {
        title: 'action',
        type: 'text',
      },
      qui: {
        title: 'qui',
        type: 'text',
      },
      dateDebut: {
        title: 'Date Debut',
        type: 'text',
      },
      dateObjectif: {
        title: 'Date Objectif',
        type: 'text',
      },
      dateRealisation: {
        title: 'Date Realisation',
        type: 'text',
      },
      actionEfficace: {
        title: 'Action Efficace',
        type: 'text',
      },
      generalisationPossible: {
        title: 'Generalisation Possible',
        type: 'text',
      },
      comment: {
        title: 'comment',
        type: 'text',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  year: any;
  Week = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  week: any;
  Activate = false;
  private i = 0;
  public ecart = 0;
  ecartEuroSum = 0;
  isGranted: boolean;
  isAdmin: boolean;

    constructor( private service: PlanActTrsService, private toaster: ToastrService,
              private trsService: TrsCMSService, private userservice: UsersService) {
  }

  init() {
    this.userservice.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.roles);
      this.isGranted = data.roles.includes(this.atelier.toLocaleUpperCase());
      this.isAdmin = data.roles.includes('ADMIN');
    });
    this.service.get().subscribe(data => {
      this.source = data;
    });
    this.planActTrs = new PlanActTrs();
    this.planActTrsS = [];
    this.Activate = false;
    this.planActTrs.week = this.week;
    this.ecartEuroSum = 0;
    this.ecart = 0;
    this.i = 0;
  }
refresh () {
      this.service.get().subscribe( data => { this.source = data ; });
}
  save() {
    this.planActTrs.week = this.week;
    this.ecart = this.ecart - this.planActTrs.ecartEuro;
    this.planActTrs.atelier = this.atelier;
    // this.planActPcd.ecartEuro = this.ecart;
    this.planActTrsS.push(this.planActTrs);
    console.log(this.planActTrs);
    console.log(this.planActTrsS);
    if (this.ecart === 0) {
      this.service.createAll(this.planActTrsS).subscribe(data => {
      });
      this.toaster.success('l\'élément a été ajouté à la table de justification', 'create');
      this.refresh();
      this.refresh();
      this.init();
    } else {
      if (this.ecart < 0) {
        this.toaster.warning('Erreur réessayer ', 'Error');
        this.ecart = this.ecart + this.planActTrs.ecartEuro;
        this.planActTrs = new PlanActTrs();
      } else {
        this.i = this.i + 1;
        this.planActTrs = new PlanActTrs();
        this.toaster.info('l\'élément de justification est enregistré. mais il doit encore justifier :' + this.ecart, 'Info');
      }
    }
  }

  ngOnInit() {
    this.init();
  }


  onCreateConfirm(event: any) {
    event.newData.atelier = this.atelier;
    event.confirm.resolve(event.newData);
    this.service.create(event.newData).subscribe(data => {
    });
    this.toaster.success('ajouté avec succé', 'create');
    this.init();
    this.refresh();
  }


  onDeleteConfirm(event: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      this.service.delete(event.data.id).subscribe(data => {});
      this.toaster.warning('les donnés suppremé ', 'Attention');
      this.refresh();
      this.refresh();
    } else {
      event.confirm.reject(event.data);
    }
  }

  onSaveConfirm(event: any) {
    event.newData.atelier = this.atelier;
    event.confirm.resolve(event.newData);
    this.service.update(event.newData).subscribe(data => {
    });
    this.toaster.info('ajouté avec succé', 'create');
    this.init();
    this.refresh();
  }

  searsh() {
    this.trsService.getByWeek(this.year, this.week).subscribe(data => {
      if (data !== null) {
        if (Object.keys(data).length === 0) {
          this.toaster.info('il n\'y a aucune information concernant le Trs en cette semaine et cette année ou Ecart est inferieur de 0 ', 'Info');
          this.init();
        } else {
          if (data.ecartEuro < 0) {
            this.toaster.info('il n\'y a aucune information concernant le Trs en cette semaine et cette année ou Ecart est inferieur de 0 ', 'Info');
            this.init();
          } else {
            this.service.getAllByWeek(this.year, this.week).subscribe(obj => {
                obj.forEach( Obj => {
                  this.i = this.i + 1;
                  console.log(Obj.ecart);
                  this.ecartEuroSum = this.ecartEuroSum + Obj.ecartEuro;
                });
              this.ecart = data.ecart;
              console.log(this.ecart);
              console.log(this.ecartEuroSum);
              if (this.ecartEuroSum === data.ecart) {
                console.log('find' + this.ecartEuroSum + 'what we have ' + data.ecart);
                this.toaster.info('l\'élément; Trs est déjà justifié dans la base de données ', 'Info');
                this.init();
              } else {
                this.ecart = this.ecart - this.ecartEuroSum;
                this.planActTrs.week = this.week;
                this.Activate = true;
              }
            });
          }
        }
      } else {
        this.toaster.info('il n\'y a pas de données dans la base de données pour justifier', 'Info');
        this.init();
      }
    });
  }
}

