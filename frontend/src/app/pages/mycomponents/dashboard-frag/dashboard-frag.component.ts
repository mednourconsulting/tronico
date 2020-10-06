import {Component, Input, OnInit} from '@angular/core';
import {DashboardFrag} from '../../model/DashboardFrag';
import {DashboardFragService} from '../../../@core/backend/common/services/DashboardFrag.service';
import {ToastrService} from 'ngx-toastr';
import {UsersService} from '../../../@core/backend/common/services/users.service';

@Component({
  selector: 'ngx-dashboard-frag',
  templateUrl: './dashboard-frag.component.html',
  styleUrls: ['./dashboard-frag.component.scss'],
  providers: [DashboardFragService, UsersService],
})
export class DashboardFragComponent implements OnInit {

  @Input() atelier: string;
  dashboardFrag: DashboardFrag = new DashboardFrag();
  isGranted: boolean;
  isAdmin: boolean;
  settings = {
    // hideSubHeader: true,
    actions: {
      add: false,
      edit: null,
      delete: false,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
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
    columns : {
      year: {
        title: 'Année',
        type: 'number',
        editable : false,
      },
       week: {
        title: 'Semaine',
        type: 'number',
       },
  atelier: {
        title: 'Atelier',
        type: 'number',
  },
  hRecusTrf: {
        title: 'H. Reçues de TRF',
        type: 'number',
  },
  hObjectif: {
        title: 'H. Engagées/objectif',
        type: 'number',
  },
  hRealise: {
        title: 'H. Réalisées(ou OF)',
        type: 'number',
  },
  nBCarteEngage: {
        title: 'Nb Cartes Engagées ou OF',
        type: 'number',
  },
  nBCarteRetard: {
        title: 'NB Carte Retard',
        type: 'number',
  },
  otd: {
        title: 'Otd',
        type: 'number',
  },
  ecart: {
        title: 'Ecart',
        type: 'number',
  },
      mqtTrf: {
        title: 'mqtTrf',
        type: 'number',
      },
      mqtTa: {
        title: 'mqtTa',
        type: 'number',
      },
      qualite: {
        title: 'qualite',
        type: 'number',
      },
      pcd: {
        title: 'pcd',
        type: 'number',
      },
      test: {
        title: 'test',
        type: 'number',
      },
      bloqueDossier: {
        title: 'bloqueDossier',
        type: 'number',
      },
      maintenance: {
        title: 'maintenance',
        type: 'number',
      },
      processOutillage: {
        title: 'processOutillage',
        type: 'number',
      },

      retardProduction: {
        title: 'retardProduction',
        type: 'number',
      },

      ecartStock: {
        title: 'ecartStock',
        type: 'number',
      },
      attenteInfoClient: {
        title: 'attenteInfoClient',
        type: 'number',
      },
      repporterSuiteDeClient: {
        title: 'repporterSuiteDeClient',
        type: 'number',
      },
      encours:  {
        title: 'encours',
        type: 'number',
      },
      netFabricable: {
        title: 'netFabricable',
        type: 'number',
      },
      enTransit: {
        title: 'enTransit',
        type: 'number',
      },
      monquantTa: {
        title: 'monquantTa',
        type: 'number',
      },
      clientMqtFc: {
        title: 'clientMqtFc',
        type: 'number',
      },
      qualiteEncours: {
        title: 'qualiteEncours',
        type: 'number',
      },
      aqf: {
        title: 'aqf',
        type: 'number',
      },
      processDossierTra: {
        title: 'processDossierTra',
        type: 'number',
      },
      testEncours: {
        title: 'testEncours',
        type: 'number',
      },
      machine: {
        title: 'machine',
        type: 'number',
      },
      finisAttRiClient: {
        title: 'finisAttRiClient',
        type: 'number',
      },
      finisReportDelai: {
        title: 'finisReportDelai',
        type: 'number',
      },
      yM: {
        title: 'yM',
        type: 'number',
      },
      mqecartStock: {
        title: 'mq Ecart Stock',
        type: 'number',
      },
      mqRuptEtConsom: {
        title: 'mq Rupt Et Consom',
        type: 'number',
      },
      hPrevus: {
        title: 'Prevus',
        type: 'number',
      },
      dontRetard: {
        title: 'dont Retard',
        type: 'number',
      },
      fabricable: {
        title: 'Fabricable',
        type: 'number',
      },
      volumeFabricableCms: {
        title: 'volume Fabricable Cms',
        type: 'number',
      },
      fabricableEncours: {
        title: 'Fabricable Encours',
        type: 'number',
      },
      previsions: {
        title: 'Previsions',
        type: 'number',
      },
      besoinEtp: {
        title: 'Besoin Etp',
        type: 'number',
      },
      etpDispo: {
        title: 'etpDispo',
        type: 'number',
      },
      effectifPlus: {
        title: 'effectif Plus',
        type: 'number',
      },
      heuresFormation: {
        title: 'heures Formation',
        type: 'number',
      },
      heuresAmelioration: {
        title: 'Heures Amelioration',
        type: 'number',
      },
    }};
  source: any;

  constructor(private userservice: UsersService, private dashboardFragService: DashboardFragService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.dashboardFragService.get(this.atelier).subscribe( data => {
      this.source = data ;
    });
    this.userservice.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.roles);
      this.isGranted = data.roles.includes(this.atelier.toLocaleUpperCase());
      this.isAdmin = data.roles.includes('ADMIN');
    });
  }

  save() {
    this.dashboardFrag.atelier = this.atelier;
    this.dashboardFrag.otd = Number((((this.dashboardFrag.nBCarteEngage - this.dashboardFrag.nBCarteRetard) /
      this.dashboardFrag.nBCarteEngage) * 100).toFixed(2));
    this.dashboardFrag.ecart = (this.dashboardFrag.hObjectif - this.dashboardFrag.hRealise);
    this.dashboardFrag.encours = (this.dashboardFrag.netFabricable + this.dashboardFrag.enTransit +
        this.dashboardFrag.monquantTa + this.dashboardFrag.clientMqtFc + this.dashboardFrag.qualiteEncours +
        this.dashboardFrag.aqf + this.dashboardFrag.processDossierTra + this.dashboardFrag.machine + this.dashboardFrag.finisAttRiClient +
        this.dashboardFrag.finisReportDelai + this.dashboardFrag.yM);
    this.dashboardFrag.fabricableEncours = Number(((this.dashboardFrag.fabricable / this.dashboardFrag.encours) * 100).toFixed(2));
      this.dashboardFrag.besoinEtp = this.dashboardFrag.previsions / 46 ;
    this.dashboardFrag.effectifPlus = this.dashboardFrag.etpDispo - this.dashboardFrag.besoinEtp;
    this.dashboardFragService.create(this.dashboardFrag).subscribe(data => {
      console.log(data);
    });
    this.toastr.success('Ajouté avec succès', 'create');
  }
}
