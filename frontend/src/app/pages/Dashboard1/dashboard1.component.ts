import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {SpleetEcartOFService} from '../../@core/backend/common/services/spleetEcartOF.service';

@Component({
  selector: 'ngx-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss'],
  providers: [SpleetEcartOFService],
})
export class Dashboard1Component implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  settings = {
     actions: {
       add: false ,
       delete: false,
       edit: false,
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
  atelier: any;
  atelierList = ['cms' , 'eiffel', 'technique', 'magasin' , 'Test', 'Vauban'];
  constructor(private service: SpleetEcartOFService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.source = data;
    });
  }

}
