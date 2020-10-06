import {Component, Input, OnInit} from '@angular/core';
import {PlanActPcd} from '../../model/PlanActPcd';
import {ToastrService} from 'ngx-toastr';
import {PlanAcPcdService} from '../../../@core/backend/common/services/PlanAcPcd.service';
import {LocalDataSource} from 'ng2-smart-table';
import {WeekMonthService} from '../../../@core/backend/common/services/WeekMonth.Service';
import {PcdWeekService} from '../../../@core/backend/common/services/PcdWeek.service';
import {UsersService} from '../../../@core/backend/common/services/users.service';

@Component({
  selector: 'ngx-plan-act-pcd',
  templateUrl: './plan-act-pcd.component.html',
  styleUrls: ['./plan-act-pcd.component.scss'],
  providers: [WeekMonthService, PlanAcPcdService, PcdWeekService, UsersService],
})
export class PlanActPcdComponent implements OnInit {
  planActPcds: PlanActPcd [];
  planActPcd: PlanActPcd = new PlanActPcd();
  planActPcdSelected: PlanActPcd = new PlanActPcd();
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
        title: 'Ecart Euro',
        type: 'number',
        editable: false,
      },
      produit: {
        title: 'produit',
        type: 'text',
        editable: false,
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

  constructor(private weekService: WeekMonthService, private service: PlanAcPcdService, private toaster: ToastrService,
              private pcdWService: PcdWeekService, private userservice: UsersService) {
  }

  init() {
    this.userservice.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.roles);
      this.isGranted = data.roles.includes(this.atelier.toLocaleUpperCase());
      this.isAdmin = data.roles.includes('ADMIN');
    });
    this.service.get(this.atelier).subscribe(data => {
      this.source = data;
    });
    this.planActPcd = new PlanActPcd();
    this.planActPcds = [];
    this.Activate = false;
    this.planActPcd.week = this.week;
    this.ecartEuroSum = 0;
    this.ecart = 0;
    this.i = 0;
  }
  refresh() {
    this.service.get( this.atelier).subscribe( data =>  { this.source = data; });
  }
  save() {
    this.planActPcd.week = this.week;
    this.ecart = this.ecart - this.planActPcd.ecartEuro;
    this.planActPcd.atelier = this.atelier;
    // this.planActPcd.ecartEuro = this.ecart;
    this.planActPcds.push(this.planActPcd);
    console.log(this.planActPcd);
    console.log(this.planActPcds);
    if (this.ecart === 0) {
      this.service.createAll(this.planActPcds).subscribe(data => {
      });
      this.toaster.success('l\'élément a été ajouté à la table de justification', 'create');
      this.init();
    } else {
      if (this.ecart < 0) {
        this.toaster.warning('Erreur réessayer ', 'Error');
        this.ecart = this.ecart + this.planActPcd.ecartEuro;
        this.planActPcd = new PlanActPcd();
      } else {
        this.i = this.i + 1;
        this.planActPcd = new PlanActPcd();
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
  }


  onDeleteConfirm(event: any) {
    if (window.confirm('Voulez-vous vraiment supprimer toutes les données concernant la semaine ' + event.data.week + ' ?')) {
      event.confirm.resolve(event.data);
      this.service.delete(event.data.id).subscribe(data => {
      });
      this.toaster.warning('les donnés suppremé ', 'delete');
      this.refresh();
      this.refresh(); }
    }

  virifyFunction() {
    this.pcdWService.getAllByWeek(this.atelier, this.planActPcdSelected.year, this.planActPcdSelected.week).subscribe(data => {
      this.ecart = data.ecartEuro;
      console.log(this.ecart);
    });
    console.log(this.planActPcdSelected);
    console.log(this.ecart);
    this.service.getAllByWeek(this.planActPcdSelected.atelier, this.planActPcdSelected.year, this.planActPcdSelected.week).subscribe(data => {
      data.forEach(obj => {
        console.log(obj);
        this.ecart = this.ecart - obj.ecartEuro;
        console.log(this.ecart);
      });
    });
    if (this.ecart !== 0) {
      this.week = this.planActPcdSelected.week;
      this.year = this.planActPcdSelected.year;
      this.toaster.warning('vous devez justifier l\'utilisation de ' + this.planActPcdSelected.ecartEuro + 'dans la semaine ' + this.planActPcdSelected.week, 'Info');
      this.Activate = true;
      this.save();
    }
  }

  onSaveConfirm(event: any) {
    event.newData.atelier = this.atelier;
    event.confirm.resolve(event.newData);
    this.service.update(event.newData).subscribe(data => {
    });
    this.toaster.info('ajouté avec succé', 'create');
    this.init();
  }

  add() {
    this.pcdWService.getAllByWeek(this.atelier, this.year, this.week).subscribe(data => {
      if (data !== null) {
        if (Object.keys(data).length === 0) {
          this.toaster.info('il n\'y a aucune information concernant le Pcd en cette semaine et cette année ou Ecart est inferieur de 0 ', 'Info');
          this.init();
        } else {
          if (data.ecartEuro < 0) {
            this.toaster.info('il n\'y a aucune information concernant le Pcd en cette semaine et cette année ou Ecart est inferieur de 0 ', 'Info');
            this.init();
          } else {
            this.service.getAllByWeek(this.atelier, this.year, this.week).subscribe(obj => {
              obj.forEach(Obj => {
                this.i = this.i + 1;
                console.log(Obj.ecartEuro);
                this.ecartEuroSum = this.ecartEuroSum + Obj.ecartEuro;
                console.log(this.ecartEuroSum);
              });
              this.ecart = data.ecartEuro;
              console.log(this.ecart);
              console.log(this.ecartEuroSum);
              if (this.ecartEuroSum === data.ecartEuro) {
                console.log('find' + this.ecartEuroSum + 'what we have ' + data.ecartEuro);
                this.toaster.info('l\'élément; Pcd est déjà justifié dans la base de données ', 'Info');
                this.init();

              } else {
                this.ecart = this.ecart - this.ecartEuroSum;
                this.planActPcd.week = this.week;
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

