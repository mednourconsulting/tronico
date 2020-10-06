import {Component, Input, OnInit} from '@angular/core';
import {ParetoOtdWeek} from '../../model/paretoOtdWeek';
import {ParetoOtdWeekService} from '../../../@core/backend/common/services/ParetoOtdWeek.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {LocalDataSource} from 'ng2-smart-table';
import {ParetoOtdWeekItem} from '../../model/ParetoOtdWeekItem';
import {ParetoOtdWeekItemService} from '../../../@core/backend/common/services/ParetoOtdWeekItem.service';
import {Produit} from '../../model/produit';
import {ProduitService} from '../../../@core/backend/common/services/Produit.service';
import {WeekMonthService} from '../../../@core/backend/common/services/WeekMonth.Service';
import {NbThemeService} from '@nebular/theme';
import {Subscription} from 'rxjs';
import {ParetoOtdWeekItemList} from '../../model/ParetoOtdWeekItemList';
import {UsersService} from '../../../@core/backend/common/services/users.service';
import {OtdWeekService} from '../../../@core/backend/common/services/OtdWeek.service';


@Component({
  selector: 'ngx-pareto-otd',
  templateUrl: './pareto-otd.component.html',
  styleUrls: ['./pareto-otd.component.scss'],
  providers: [ParetoOtdWeekService, ParetoOtdWeekItemService, ProduitService, WeekMonthService, UsersService, OtdWeekService],
})
export class ParetoOtdComponent implements OnInit {

  @Input() atelier: string;
  paretoOtd: ParetoOtdWeek = new ParetoOtdWeek();
  paretoOtdCreate: ParetoOtdWeek = new ParetoOtdWeek();
  labelItems = [];
  dataItems = [];
  totalLabelItems = [];
  totaleDataItems = [];
  edited = false;
  themeSubscription: Subscription;
  options: any;
  data: any;
  select = null;
  produits = [];
  ecart: number;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
      mode: 'inline',
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
      realise: {
        title: 'Réalisation (carte)',
        type: 'number',
      },
      bjectif: {
        title: 'Objectif (carte)',
        type: 'number',
      },
      ecart: {
        title: 'Ecart (%)',
        type: 'number',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  settings_items = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
      mode: 'inline',
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
      produit: {
        title: 'Produit',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: this.produits,
          },
        },
      },

      ecartCarte: {
        title: 'Ecart (Cart)',
        type: 'number',
      },
      ecart: {
        title: 'Ecart (%)',
        type: 'number',
        editable: false,
        addable: false,
      },
      raison: {
        title: 'Raison',
        type: 'text',
      },
    },

  };
  settingsItemsAffichage = {
    hideSubHeader: true,
    actions: {
      delete: false,
      add: false,
      edit: null,
    },
    columns: {
      produit: {
        title: 'Produit',
        type: 'number',
      },

      ecartCarte: {
        title: 'Ecart (Cart)',
        type: 'number',
      },
      ecart: {
        title: 'Ecart (%)',
        type: 'number',
        editable: false,
      },
      raison: {
        title: 'Raison',
        type: 'text',
      },
    },

  };
  list = [];
  editedView = false;
  activate = false;
  sourceItems: any;
  weekFirst: any;
  weekFin: any;
  year: any;
  stackedChart = {
    title: 'Pareto Otd par Semaine',
    typeChart: 'BarChart',
    columnNames: ['Ptoduit', 'Ecart (cart)'],
    options : {
      hAxis: {
        title: 'Ecart(%)'},
      vAxis: {title: 'Produit'},
    },
    width : 1000,
    height : 550,
    data : [['0', 0]],
  };
  chartType =  [{type : 'LineChart', name : 'Line'}, {type : 'AreaChart', name : 'Area '}, {type : 'BarChart' , name : 'Bar'},
    {type : 'ColumnChart' , name : 'Column'} ] ;
  Data = [];
  collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  isGranted: boolean;
  isAdmin: boolean;
  constructor(private theme: NbThemeService, private service: ParetoOtdWeekService, private serviceOtd: OtdWeekService, private toastr: ToastrService, private router: Router,
              private service_item: ParetoOtdWeekItemService, private service_pr: ProduitService,
              private userservice: UsersService) {
    this.service_pr.getAll().subscribe(data => {
      data.forEach(obj => {
        this.produits.push({value: obj.produit, title: obj.produit, desc: obj.des , sum: 0});
      });
    });
  }

  init() {
    this.produits.forEach(obj => {
      obj.sum = 0;
    });
    this.labelItems = [];
    this.dataItems = [];
    this.totalLabelItems = [];
    this.totaleDataItems = [];
    this.service.getAll(this.atelier).subscribe(data => {
      this.source = data;
    });
    // this.paretoOtd = new ParetoOtdWeek();
    this.select = null;
    this.paretoOtd.id = null;
  }
   refreshData() {
    this.service.getAll(this.atelier).subscribe( data => { this.source = data; });  }
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
    this.paretoOtd.ecart = (this.paretoOtd.bjectif - this.paretoOtd.realise) * 100 / this.paretoOtd.bjectif;
    this.paretoOtd.ecartEcart = this.paretoOtd.bjectif - this.paretoOtd.realise;
    this.paretoOtd.atelier = this.atelier;
    console.log(this.paretoOtd.id);
    this.serviceOtd.getAllByWeek(this.atelier , (new Date().getFullYear()) , this.paretoOtd.week).subscribe( data => {
      if (this.paretoOtd.id === null) {
      console.log(data);
      if (data !== null ) {
        this.service.getByAtelierByYearByWeek(this.atelier, (new Date().getFullYear()), this.paretoOtd.week).subscribe(obj => {
          console.log(obj);
          if (Object.keys(obj).length !== 0) {
            this.toastr.warning('les données concernant cette semaine il est deja exest', 'warning');
          } else {
            if (this.paretoOtd.ecart > 0) {
              console.log(this.paretoOtd.ecart);
              console.log(data.ecart);
              if (data.ecart - 1 <= this.paretoOtd.ecart) {
                if (this.paretoOtd.ecart <= data.ecart + 1) {
                  this.toastr.warning('justifier les écarts', 'warning');
                  this.edited = true;
                  this.ecart = Number(0);
                  this.paretoOtd.paretoOtdWeekItemList.forEach(ob => {
                    this.ecart = Number(this.ecart) + Number(ob.ecartCarte);
                  });
                } else {
                  this.init();
                  this.toastr.warning('l\'écart ne correspond pas à l\'ecart dans "Otd" est ' + data.ecart + '', 'warning');
                }
              } else {
                this.init();
                this.toastr.warning('l\'écart ne correspond pas à l\'ecart dans "Otd" est ' + data.ecart + '', 'warning');
              }
            }  else {
              console.log('second if');
              console.log(this.paretoOtd);
              this.service.create(this.paretoOtd).subscribe(Obj => {
              });
              this.toastr.success('ajouté avec succé', 'create');
              this.init();
            }
          }
        });
      } else {
        this.toastr.warning('il n\'y a pas de données correspondant à cela dans le «Otd». insérer d\'abord les données concernant cette semaine à «Otd».', 'warning');
      }
          } else {
        this.service.getByAtelierByYearByWeek(this.atelier, (new Date().getFullYear()), this.paretoOtd.week).subscribe(obj => {
          console.log(obj);
          if (Object.keys(obj).length !== 1) {
            this.toastr.warning('les données concernant cette semaine il est deja exest', 'warning');
          } else {
            if (this.paretoOtd.ecart > 0) {
              console.log(this.paretoOtd.ecart);
              console.log(data.ecart);
              if (data.ecart - 1 <= this.paretoOtd.ecart) {
                if (this.paretoOtd.ecart <= data.ecart + 1) {
                  this.toastr.warning('justifier les écarts', 'warning');
                  this.edited = true;
                  this.ecart = Number(0);
                  this.paretoOtd.paretoOtdWeekItemList.forEach(ob => {
                    this.ecart = Number(this.ecart) + Number(ob.ecartCarte);
                  });
                } else {
                  this.toastr.warning('l\'écart ne correspond pas à l\'ecart dans "Otd" est ' + data.ecart + '', 'warning');
                  this.init();
                }
              } else {
                this.toastr.warning('l\'écart ne correspond pas à l\'ecart dans "Otd" est ' + data.ecart + '', 'warning');
                this.init();
              }
            } else {
              console.log('tired if ');
              console.log(this.paretoOtd);
              this.service.update(this.paretoOtd).subscribe(donne => {
              });
              this.init();
            }
          }
        });
      }
  });
  }

  save_justif() {
    this.ecart = 0;
    this.paretoOtd.paretoOtdWeekItemList.forEach( data => {
      this.ecart = Number(this.ecart) + Number(data.ecartCarte) ;
      });
    if (this.ecart === this.paretoOtd.ecartEcart) {
      if (this.paretoOtd.id !== null) {
        // this.paretoOtd.paretoOtdWeekItemList = this.paretoOtdWeekItems;
        console.log(this.paretoOtd);
        console.log(this.ecart);
        this.service.updateParetoOtdWithItems(this.paretoOtd).subscribe(data => {
          console.log('update' + data);
        });
        this.edited = false;
        this.toastr.info('ajouté avec succé', 'UPDATE');
      } else {
        // this.paretoOtd.paretoOtdWeekItemList = this.paretoOtdWeekItems;
        console.log(this.paretoOtd.ecart);
        console.log(this.ecart);
        this.service.saveParetoOtdWithItems(this.paretoOtd).subscribe(data => {
          console.log(data);
        });
        this.edited = false;
        this.toastr.success('ajouté avec succé', 'create');
       this.router.navigate(['/pages/' + this.atelier + '/planactotdw', this.paretoOtd]);
      }
    } else {
      this.toastr.warning('paretoOtd ecart ' + this.paretoOtd.ecartEcart + ' justify ecart ' + this.ecart, 'create');
    }

  }

  OnCreateConfirmItems(event: any) {
    this.activate = true;
    this.ecart = Number(this.ecart) + Number(event.newData.ecartCarte);
    this.service_pr.getByProduit(event.newData.produit).subscribe(data => {
      event.newData.atelier = this.atelier;
      event.newData.paretoOtd = this.paretoOtd;
      event.newData.ecart = Number(((event.newData.ecartCarte / this.paretoOtd.bjectif) * 100).toFixed(2));
      event.confirm.resolve(event.newData);
      this.paretoOtd.paretoOtdWeekItemList.push(new ParetoOtdWeekItem(data, event.newData.ecartCarte, event.newData.ecart, event.newData.raison, event.newData.atelier));
    });
    console.log(this.paretoOtd);
  }

  onDeleteConfirmItems(event: any) {
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

  onSaveConfirmItems(event: any) {
    this.ecart = (Number(this.ecart) - event.data.ecartCarte) + Number(event.newData.ecartCarte);
    event.newData.ecart = Number(((event.newData.ecartCarte / this.paretoOtd.bjectif) * 100).toFixed(2));
    console.log(this.ecart);
    this.service_pr.getByProduit(event.newData.produit).subscribe(data => {
      this.paretoOtd.paretoOtdWeekItemList.forEach(obj => {
        if (obj.produit.produit === event.data.produit && obj.ecartCarte === event.data.ecartCarte && obj.raison === event.data.raison) {
          console.log('Pass Pass');
          obj.produit = data;
          obj.raison = event.newData.raison;
          obj.ecartCarte = event.newData.ecartCarte;
          obj.ecart = Number(((event.newData.ecartCarte / this.paretoOtd.bjectif) * 100).toFixed(2));
        }
      });
      event.confirm.resolve(event.newData);
      console.log(this.paretoOtd);
    });
  }

  onRowSelect(event: any) {
    this.paretoOtd = event.data;
    this.select = '0';
    if (Object.keys(event.data.paretoOtdWeekItemList).length !== 0) {
      console.log('pass');
      this.editedView = true;
      this.list = [];
      event.data.paretoOtdWeekItemList.forEach(data => {
        this.list.push(new ParetoOtdWeekItemList(data.produit.produit, data.ecartCarte, data.ecart, data.raison, this.atelier));
      });
      //
      this.sourceItems = this.list;
    } else {
      this.editedView = false;
      this.list = [];
      this.sourceItems = this.list;
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
    event.newData.ecart = event.newData.bjectif - event.newData.realise;
    event.newData.atelier = this.atelier;
    console.log(this.paretoOtd);
    if (event.newData.ecart > 0) {
      this.toastr.warning('justifier les écarts', 'warning');
      this.edited = true;
      this.ecart = Number(0);
    } else {
      this.service.create(this.paretoOtd).subscribe(data => {
      });
      this.toastr.success('ajouté avec succé', 'create');
    }
  }

  OnCreateConfirm(event: any) {
    this.paretoOtdCreate.ecart = event.newData.bjectif - event.newData.realise;
    this.paretoOtdCreate.atelier = this.atelier;
    this.paretoOtdCreate.week = event.newData.week;
    this.paretoOtdCreate.bjectif = event.newData.bjectif;
    this.paretoOtdCreate.realise = event.newData.realise;
    console.log(this.paretoOtdCreate);
    if (this.paretoOtdCreate.ecart > 0) {
      this.toastr.warning('justifier les écarts', 'warning');
      this.editedView = true;
      this.activate = true;
      this.ecart = Number(0);
    } else {
      this.service.create(this.paretoOtd).subscribe(data => {
      });
      this.toastr.success('ajouté avec succé', 'create');
    }
  }

  OnCreateConfirmView(event: any) {
    this.ecart = Number(this.ecart) + Number(event.newData.ecartCarte);
    this.service_pr.getByProduit(event.newData.produit).subscribe(data => {
      event.newData.atelier = this.atelier;
      event.newData.paretoOtd = this.paretoOtdCreate;
      event.newData.ecart = Number(((event.newData.ecartCarte / this.paretoOtdCreate.realise) * 100).toFixed(2));
      event.confirm.resolve(event.newData);
      this.paretoOtdCreate.paretoOtdWeekItemList.push(new ParetoOtdWeekItem(data[0], event.newData.ecartCarte, event.newData.ecart, event.newData.raison, event.newData.atelier));
    });
  }

  saveItems() {
    if (this.ecart === this.paretoOtdCreate.ecart) {
      // this.paretoOtd.paretoOtdWeekItemList = this.paretoOtdWeekItems;
      console.log(this.paretoOtdCreate.ecart);
      console.log(this.ecart);
      this.service.saveParetoOtdWithItems(this.paretoOtdCreate).subscribe(data => {
        console.log(data);
      });
      this.edited = false;
      this.toastr.success('ajouté avec succé', 'Create');
    } else {
      this.toastr.warning('Warning');
    }
    this.init();
    this.refreshData();
  }

  onSaveConfirm_injection(event: any) {
    this.paretoOtd = event.data;
  }


  searchFor() {
    if (this.weekFirst <= this.weekFin ) {
      this.service.getAllByAtelierAndYear( this.atelier , this.year ).subscribe( data => {
        if (data === null ) {
          this.toastr.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
        } else {
          this.Data = [];
          data.forEach(obj => {
            if (obj.paretoOtdWeekItemList !== null) {
              if (obj.week >= this.weekFirst) {
                if (obj.week <= this.weekFin) {
                  obj.paretoOtdWeekItemList.forEach(Data => {
                    this.produits.forEach(Obj => {
                      if (Data.produit.produit === Obj.title) {
                        Obj.sum += Number(Data.ecart.toFixed(2));
                      }
                    });
                  });
                }
              }
            }
          });
          console.log(this.produits);
          this.produits.forEach(produit => {
            this.Data.push(['' + produit.desc, produit.sum]);
          });
          console.log(this.totalLabelItems);
          this.stackedChart = {
            title: 'Pareto OTD [ Semaine: [S' + this.weekFirst + ', S' + this.weekFin + '] , Années: [' + this.year + ']].',
            typeChart: 'BarChart',
            columnNames: ['Produit', 'Ecart (%)'],
            options: {
              hAxis: {
                title: 'Ecart (%)',
              },
              vAxis: {title: 'Produit '},
            },
            width: 1000,
            height: 550,
            data: this.Data,
          };
        } });
  } else {
      this.toastr.info('le premier semaine doit être inférieur au dernier', 'Attention');
    }
    this.init();
    this.refreshData();
  }

  update() {
    this.paretoOtd = new ParetoOtdWeek();
    this.sourceItems = [];
    this.paretoOtd.id = null;
    this.editedView = false;
    this.select = null;
  }
}
