import {Component, Input, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {ToastrService} from 'ngx-toastr';
import {PlanActProductiviteService} from '../../../@core/backend/common/services/PlanActProductivite.service';
import {PlanActProductivite} from '../../model/PlanActProductivite';
import {EmployeService} from '../../../@core/backend/common/services/EmployeService';
import {UsersService} from '../../../@core/backend/common/services/users.service';
import {ProductionMensuelService} from '../../../@core/backend/common/services/ProductionMensuel.service';


@Component({
  selector: 'ngx-plan-act-productivite',
  templateUrl: './plan-act-productivite.component.html',
  styleUrls: ['./plan-act-productivite.component.scss'],
  providers: [PlanActProductiviteService, EmployeService, UsersService, ProductionMensuelService],
})
export class PlanActProductiviteComponent implements OnInit {
  planActProductivite: PlanActProductivite = new PlanActProductivite();
  @Input('atelier') atelier: string;
  isGranted: boolean;
  isAdmin: boolean;
  Month = [
    {value: 1, month: 'JAN'},
    {value: 2, month: 'FÉV'},
    {value: 3, month: 'MAR'},
    {value: 4, month: 'AVR'},
    {value: 5, month: 'MAI'},
    {value: 6, month: 'JUIN'},
    {value: 7, month: 'JUIL'},
    {value: 8, month: 'AUG'},
    {value: 9, month: 'SEP'},
    {value: 10, month: 'OCT'},
    {value: 11, month: 'NOV'},
    {value: 12, month: 'DEC'},
  ];
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
      month: {
        title: 'Mois',
        type: 'number',
        editable: false,
      },
      ecart: {
        title: 'EcartEuro',
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
  collection = [];
  Activate = false;
  year: number;
  month: number;
  private i = 0;
  public ecart = 0;
  ecartEuroSum = 0;

  constructor(private service: PlanActProductiviteService, private serviceProductivite: ProductionMensuelService, private toaster: ToastrService,
              private serviceEmploye: EmployeService, private userservice: UsersService) {
    this.serviceEmploye.getAll().subscribe(data => {
      data.forEach(obj => {
        this.collection.push({title: obj.employe});
      });
    });
  }

  init() {
    this.service.getAll(this.atelier).subscribe(data => {
      this.source = data;
    });
  }

  save() {
    const planActProductiviteS: PlanActProductivite[] = [];
    this.planActProductivite.month = this.month;
    this.ecart = this.ecart - this.planActProductivite.ecart;
    this.planActProductivite.atelier = this.atelier;
    planActProductiviteS.push(this.planActProductivite);
    console.log(this.planActProductivite);
    console.log(this.planActProductivite);
    if (this.ecart === 0) {
      this.service.createAll(planActProductiviteS).subscribe(data => {
      });
      this.toaster.success('l\'élément a été ajouté à la table de justification', 'create');
      this.init();
    } else {
      if (this.ecart < 0) {
        this.toaster.warning('Erreur réessayer ', 'Error');
        this.ecart = this.ecart + this.planActProductivite.ecart;
        this.planActProductivite = new PlanActProductivite();
      } else {
        this.i = this.i + 1;
        this.planActProductivite = new PlanActProductivite();
        this.toaster.info('l\'élément de justification est enregistré. mais il doit encore justifier :' + this.ecart, 'Info');
      }
    }
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


  onCreateConfirm(event: any) {
    event.newData.atelier = this.atelier;
    event.confirm.resolve(event.newData);
    this.service.create(event.newData).subscribe(data => {
    });
    this.toaster.success('ajouté avec succé', 'create');
    this.init();

  }

  onDeleteConfirm(event: any) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(event.data);
      this.service.delete(event.data.id).subscribe(data => {
      });
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
    this.service.update(event.Data.id, event.newData).subscribe(data => {
    });
    this.toaster.info('', 'Update');
    this.init();
  }

  searsh() {
    this.serviceProductivite.getByMonth(this.atelier, this.year, this.month).subscribe(data => {
      if (data !== null) {
        if (Object.keys(data).length === 0) {
          this.toaster.info('il n\'y a aucune information concernant le Pcd en cette semaine et cette année ou Ecart est inferieur de 0 ', 'Info');
          this.init();
        } else {
          if (data.ecartEuro < 0) {
            this.toaster.info('il n\'y a aucune information concernant le Pcd en cette semaine et cette année ou Ecart est inferieur de 0 ', 'Info');
            this.init();
          } else {
            this.service.getAllByMonth(this.atelier, this.year, this.month).subscribe(obj => {
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
                this.planActProductivite.month = this.month;
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

  refresh() {
    this.service.getAll(this.atelier).subscribe(data => {
      this.source = data;
    });
  }
}
