import {Component, OnInit} from '@angular/core';
import {SpleetEcartOF} from '../../model/SpleetEcartOF';
import {LocalDataSource} from 'ng2-smart-table';
import {SpleetEcartOFService} from '../../../@core/backend/common/services/spleetEcartOF.service';
import {ToastrService} from 'ngx-toastr';
import {NbAccessChecker} from '@nebular/security';
import {UsersService} from '../../../@core/backend/common/services/users.service';

@Component({
  selector: 'ngx-spleet-ecart-of',
  templateUrl: './spleet-ecart-of.component.html',
  styleUrls: ['./spleet-ecart-of.component.scss'],
  providers: [SpleetEcartOFService, UsersService],
})
export class SpleetEcartOfComponent implements OnInit {
  spleetEcartOf: SpleetEcartOF = new SpleetEcartOF();
  source: LocalDataSource = new LocalDataSource();
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
      nClient: {
        title: 'No Client',
        type: 'number',
      },
      lot: {
        title: 'Lot+',
        type: 'string',
      },
      descProduit: {
        title: 'Descriptionde produit',
        type: 'string',
      },
      qteBase: {
        title: 'Qte de bade',
        type: 'number',
      },
      qteSolde: {
        title: 'Qte solde',
        type: 'number',
      },
      newTips: {
        title: 'New tips',
        type: 'string',
      },
      comment: {
        title: 'Commentaire',
        type: 'string',
      },
    },
  };
  isGranted: boolean;
  isAdmin: boolean;
  currentUser: any;
  constructor(private usersService: UsersService, private service: SpleetEcartOFService, private userservice: UsersService,
              private toastr: ToastrService, private acess: NbAccessChecker) {
  }

  ngOnInit() {
    this.userservice.getCurrentUser().subscribe(data => {
      console.log(data);
      console.log(data.roles);
      this.isAdmin = data.roles.includes('ADMIN');
    });
    this.service.getAll().subscribe(data => {
      this.source = data;
    });
    this.acess.isGranted('view', 'user').subscribe(data => {
      this.isGranted = data;
    });
    this.usersService.getCurrentUser().subscribe(data => {
      this.currentUser = data;
      console.log(this.currentUser.roles);
      console.log(this.currentUser.roles.includes('ADMIN'));
      this.isGranted = this.currentUser.roles.includes('ADMIN');
    });
  }

  init() {
    this.service.getAll().subscribe(data => {
      this.source = data;
    });
    this.spleetEcartOf = new SpleetEcartOF();
  }

  save() {
    this.service.create(this.spleetEcartOf).subscribe(data => {
    });
    this.toastr.success('Ajouté avec succès', 'Add Spleet ecart Of');
    this.init();
  }

  onDeleteConfirm(event) {
    this.service.delete(event.data.id).subscribe(data => {
    });
    this.toastr.warning('Spleet ecart of supprimé', 'Delete');
  }

  onEdit(event) {
    this.service.update(event.newData).subscribe(data => {
      console.log(data);
    });
    this.toastr.info('Spleet ecart of modifié', 'Edit');
    this.init();
  }

  onCreat(event) {
    this.service.create(event.newData).subscribe(data => {
      console.log(data);
    });
    this.toastr.info('Spleet ecart of modifié', 'Edit');
    this.init();
  }
}
