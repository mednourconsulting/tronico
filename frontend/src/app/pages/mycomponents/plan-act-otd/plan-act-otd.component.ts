import {Component, Input, OnInit} from '@angular/core';
import {PlanActOtd} from '../../model/PlanActOtd';
import {LocalDataSource} from 'ng2-smart-table';
import {ToastrService} from 'ngx-toastr';
import {PlanAcOtdService} from '../../../@core/backend/common/services/PlanActOtd.service';
import {ActivatedRoute} from '@angular/router';
import {ParetoOtdWeek} from '../../model/paretoOtdWeek';
import {ParetoOtdWeekService} from '../../../@core/backend/common/services/ParetoOtdWeek.service';
import {WeekMonthService} from '../../../@core/backend/common/services/WeekMonth.Service';
import {ParetoOtdWeekItemService} from '../../../@core/backend/common/services/ParetoOtdWeekItem.service';
import {UsersService} from '../../../@core/backend/common/services/users.service';

@Component({
  selector: 'ngx-plan-act-otd',
  templateUrl: './plan-act-otd.component.html',
  styleUrls: ['./plan-act-otd.component.scss'],
  providers: [PlanAcOtdService, ParetoOtdWeekService, WeekMonthService, ParetoOtdWeekItemService, UsersService],
})
export class PlanActOtdComponent implements OnInit {
  planActOtd: PlanActOtd[] = [];
  source: LocalDataSource = new LocalDataSource();
  @Input('atelier') atelier: string;
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
        title: 'ecart',
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
      DateRealisation: {
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
  paretoEcartToJustify: ParetoOtdWeek = new ParetoOtdWeek();
  week: number;
  year: number;
  findIt = false;
  Week = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  isGranted: boolean;
  isAdmin: boolean;
  constructor(private weekService: WeekMonthService, private service: PlanAcOtdService, private toaster: ToastrService,
               private paretoOtdWService: ParetoOtdWeekService, private serviceItem: ParetoOtdWeekItemService,
  private userservice: UsersService) {
  }

  init() {
    this.service.getAll(this.atelier, (new Date).getFullYear()).subscribe(data => {
      this.source = data;
    });
    this.findIt = false;
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
    this.service.getAllByWeek(this.atelier , this.year , this.week).subscribe( data => {
      if (Object.keys(data).length === 0 ) {
        this.service.createAll(this.planActOtd).subscribe(obj => {
        });
        this.toaster.success('ajouté avec succé', 'create');
       this.planActOtd = [];
        this.init();
      } else {
        this.toaster.warning('les données concernant la semaine que vous insérez sont existe dans la base de donnes ', 'Attention');
      }
    });
  }

  createConfirm(event: any) {
    event.newData.atelier = this.atelier;
    event.confirm.resolve(event.newData);
    this.service.create(event.newData).subscribe(data => {
    });
    this.toaster.success('ajouté avec succé', 'create');
    this.init();
  }
 refreshData () {
   this.service.getAll(this.atelier, (new Date).getFullYear()).subscribe(data => {
     this.source = data;
   });
   this.year = (new Date).getFullYear();
 }
  onDeleteConfirm(event: any) {
    if (window.confirm('Voulez-vous vraiment supprimer toutes les données concernant la semaine ' + event.data.week + ' ?')) {
      event.confirm.resolve(event.data);
      this.service.deleteList(event.data.atelier, event.data.year, event.data.week).subscribe(data => {
      });
      this.toaster.warning('les donnés suppremé ', 'delete');
      this.refreshData();
      this.refreshData();
    }
  }

  onSaveConfirm(event: any) {
    event.newData.atelier = this.atelier;
    event.confirm.resolve(event.newData);
    this.service.update(event.newData).subscribe(data => {
    });
    this.toaster.info('modifé les donnes  ', 'update');
    this.init();
  }


  onCreateConfirm(event: any) {
    event.confirm.resolve(event.newData);
    this.service.create(event.newData).subscribe(data => {
    });
    this.init();
  }

  recherche() {
    console.log(this.week);
    console.log(this.atelier);
    console.log(this.year);
    this.planActOtd = [];
     let i = 0 ;
    this.paretoOtdWService.getByAtelierByYearByWeek(this.atelier, this.year, this.week).subscribe(data => {
      console.log(data);
      if (Object.keys(data).length === 0) {
          this.toaster.info('il n\'y a pas de données dans le "paretoOtd" concernant cette semaine, veuillez d\'abord ajouter les données.', 'Info');

      } else {
            this.service.getAllByWeek(this.atelier, this.year, this.week).subscribe(Obj => {
                  if (Object.keys(Obj).length === 0) {
                    this.paretoEcartToJustify = data;
                    data.forEach(obj => {
                      if (Object.keys(obj.paretoOtdWeekItemList).length !== 0) {
                        this.findIt = true;
                        obj.paretoOtdWeekItemList.forEach(object => {
                          console.log(object);
                          this.planActOtd.push(new PlanActOtd());
                          this.planActOtd[i].atelier = this.atelier;
                          this.planActOtd[i].week = this.week;
                          this.planActOtd[i].produit = object.produit.produit;
                          this.planActOtd[i].ecartEuro = object.ecart;
                          this.planActOtd[i].cause = object.raison;
                          i = i + 1;
                          console.log(this.planActOtd);
                        });
                      } else {
                        this.toaster.info('aucun élément à justifier ', 'Info');
                      }
                    });
                        } else {
                    this.toaster.info('Cette semaine est déjà dans la base de données', 'Info');
                  }
            });
      }
    });
    this.init();
  }
}
