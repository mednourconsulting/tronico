import {Component, Input, OnInit} from '@angular/core';
import {ConfigOtdW} from '../../model/ConfigOtdW';
import {ConfigPcdW} from '../../model/ConfigPcdW';
import {ConfigProductiviteMensuel} from '../../model/ConfigProductiviteMensuel';
import {ConfigOtdService} from '../../../@core/backend/common/services/ConfigOtd.service';
import {ConfigPcdWService} from '../../../@core/backend/common/services/ConfigPcdW.service';
import {ConfigProductiviteMensuelService} from '../../../@core/backend/common/services/ConfigProductiviteMensuel.service';
import {ToastrService} from 'ngx-toastr';
import {Produit} from '../../model/produit';
import {ProduitService} from '../../../@core/backend/common/services/Produit.service';
import {LocalDataSource} from 'ng2-smart-table';
import {EmployeService} from '../../../@core/backend/common/services/EmployeService';
import {Employe} from '../../model/Employe';
import {UsersService} from '../../../@core/backend/common/services/users.service';
import {ConfigTrs} from '../../model/ConfigTrs';
import {ConfigTrsService} from '../../../@core/backend/common/services/ConfigTrsService';

@Component({
  selector: 'ngx-prametrage',
  templateUrl: './prametrage.component.html',
  styleUrls: ['./prametrage.component.scss'],
  providers: [ConfigTrsService, ConfigOtdService, ConfigPcdWService, ConfigProductiviteMensuelService, ProduitService, EmployeService, UsersService],
})
export class PrametrageComponent implements OnInit {
  @Input() atelier: string;
  currentYear = new Date().getFullYear();
  configOtdW = new ConfigOtdW();
  configPcdW = new ConfigPcdW();
  employe = new Employe();
  isAdmin: boolean;
  configTrs = new ConfigTrs();
  configProductiviteMensuel: ConfigProductiviteMensuel = new ConfigProductiviteMensuel();
  produit: Produit = new Produit();
  sourceProduit: LocalDataSource = new LocalDataSource();
  sourceEmploye: LocalDataSource = new LocalDataSource();
  settingsProduit = {
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
        type: 'String',
      },
      des: {
        title: 'Description',
        type: 'String',
      },
    },
  };
  settingsEmploye = {
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
      employe: {
        title: 'Employé',
        type: 'String',
      },
      commentaire: {
        title: 'Commentaire',
        type: 'String',
      },
    },
  };


  // configTrs: ConfigTrs = new ConfigTrs();

  constructor(private configTrsService: ConfigTrsService, private toastr: ToastrService, private configOtdService: ConfigOtdService, private produitService: ProduitService,
              private configPcdWService: ConfigPcdWService, private configProductiviteMensuelService: ConfigProductiviteMensuelService,
              private employeService: EmployeService, private userservice: UsersService) {
  }

  ngOnInit() {
    this.init();
    this.userservice.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.roles);
      this.isAdmin = data.roles.includes('ADMIN');
    });
  }

  init() {
    this.configOtdService.getAll(this.atelier, this.currentYear).subscribe(data => {
      if (data !== null) {
        console.log(data);
        this.configOtdW = data;
      } else {
        this.configOtdW = new ConfigOtdW();
      }
    });
    this.configPcdWService.getAll(this.atelier, this.currentYear).subscribe(data => {
      console.log(data);
      if (data) {
        this.configPcdW = data;
        console.log(data);
      } else {
        this.configPcdW = new ConfigPcdW();
      }
    });
    this.configTrsService.findByYear(this.currentYear).subscribe(data => {
      console.log(data);
      if (data) {
        this.configTrs = data;
        console.log(data);
      } else {
        this.configTrs = new ConfigTrs();
        console.log(this.configTrs);
      }
    });
    this.configProductiviteMensuelService.getConfigByYear(this.atelier , this.currentYear).subscribe(data => {
      if (data !== null) {
        this.configProductiviteMensuel = data;
      } else {
        this.configProductiviteMensuel = new ConfigProductiviteMensuel();
      }
    });
    this.produitService.getAll().subscribe(data => {
      this.sourceProduit = data;
    });
    this.employeService.getAll().subscribe(data => {
      this.sourceEmploye = data;
    });
    this.produit = new Produit();
    this.employe = new Employe();
  }

  saveOtdConfig() {
    this.configOtdW.atelier = this.atelier;
    this.configOtdService.create(this.configOtdW).subscribe(data => {
      console.log(data);
    });
    this.toastr.success('Otd parameter ajoutée', 'create');
  }

  savePcdConfig() {
    this.configPcdW.atelier = this.atelier;
    this.configPcdWService.create(this.configPcdW).subscribe(data => {
      console.log(data);
    });
    this.toastr.success('Pcd parameter ajoutée', 'paramètrage de: ' + this.currentYear);
  }

  saveProductiviteMensuelConfig() {
    this.configProductiviteMensuel.atelier = this.atelier;
    this.configProductiviteMensuelService.create(this.configProductiviteMensuel).subscribe(data => {
      console.log(data);
    });
    this.toastr.success('Productivité mensuel parameter ajoutée', 'paramètrage de: ' + this.currentYear);
  }

  saveProduit() {
    this.produitService.create(this.produit).subscribe(data => {
    });
    this.ngOnInit();
    this.toastr.success('Produit ajouté avec succès', 'create');
  }

  saveEmploit() {
    this.employeService.create(this.employe).subscribe(data => {
    });
    this.ngOnInit();
    this.toastr.success('Produit ajouté avec succès', 'create');
  }

  onDeleteConfirm(event: any) {
    event.confirm.resolve(event.data);
    this.produitService.delete(event.data.id).subscribe(data => {
    });
    this.toastr.warning('les donnés suppremé ', 'delete');
  }

  createConfirm(event: any) {
    event.confirm.resolve(event.newData);
    this.produitService.create(event.newData).subscribe(data => {
    });
    this.toastr.success('ajouté avec succé', 'create');
    this.init();
  }

  onSaveConfirm(event: any) {
    event.confirm.resolve(event.newData);
    this.produitService.update(event.newData).subscribe(data => {
    });
  }

  saveTrsConfig() {
    this.configTrsService.create(this.configTrs).subscribe(data => {
      console.log(data);
    });
  }

  getConfigTrsByYear(year) {
    this.configTrsService.findByYear(year).subscribe(data => {
      this.configTrs = data;
    });
  }
}
