import {Component, Input, OnInit} from '@angular/core';
import {ProjetBM} from '../../model/ProjetBM';
import {ProjetBMService} from '../../../@core/backend/common/services/ProjetBM.service';
import {ToastrService} from 'ngx-toastr';
import {UsersService} from '../../../@core/backend/common/services/users.service';
import {User} from '../../../@core/interfaces/common/users';
import {EmployeService} from '../../../@core/backend/common/services/EmployeService';

@Component({
    selector: 'ngx-project-bm',
    templateUrl: './project-bm.component.html',
    styleUrls: ['./project-bm.component.scss'],
    providers: [ProjetBMService, UsersService, EmployeService],
})
export class ProjectBMComponent implements OnInit {
    @Input('atelier') atelier: string;
    isGranted: boolean;
    settings: any;
    source: any;
    projetBM: ProjetBM = new ProjetBM();
    weekMin: number;
    weekMax: number;
    year = (new Date).getFullYear();
    user: User;
    isAdmin: boolean;
    listEmploye: string[] = [];

    private progressType: string = 'success';
    class: string = 'progress-bar bg-' + this.progressType;
    projetBMList: any[] = [];

    constructor(private service: ProjetBMService, private toastr: ToastrService, private userservice: UsersService, private employeService: EmployeService) {
    }

    ngOnInit() {
        this.service.getAll().subscribe(data => {
            this.projetBMList = data;
        });
        this.userservice.getCurrentUser().subscribe(data => {
            console.log(data);
            console.log(data.roles);
            this.isGranted = data.roles.includes(this.atelier.toLocaleUpperCase());
            this.isAdmin = data.roles.includes('ADMIN');
        });
        this.employeService.getAll().subscribe(data => {
            data.forEach(employe => {
                this.listEmploye.push(employe.employe);
            });
        });
    }

    save() {
        if (this.projetBM.advancement === 100) {
            this.projetBM.status = 'termine';
        } else {
            this.projetBM.status = 'encours';
        }
        if (this.projetBM.id == null) {
            this.service.create(this.projetBM).subscribe(data => {
                console.log(data);
            });
            this.projetBM = new ProjetBM();
            this.toastr.success('Task ajouté', 'Create');
        }
        if (this.projetBM.id != null) {
            this.service.update(this.projetBM).subscribe(data => {
                console.log(data);
            });
            this.projetBM = new ProjetBM();
            this.toastr.info('Task modifié', 'Update');
        }
        this.service.getAll().subscribe(data => {
            this.projetBMList = data;
        });
    }

    createConfirm($event: any) {
    }

    onDeleteConfirm($event: any) {
    }

    onSaveConfirm($event: any) {
    }

    delete(item: any) {
        this.service.delete(item).subscribe(data => {
            console.log(data);
        });
        this.toastr.warning('Task deleted', 'delete');
        this.service.getAll().subscribe(data => {
            this.projetBMList = data;
        });
    }

    trackByFunction(index, item) {
        if (!item) return null;
        return item.id;
    }

    annulerProjet(item: any) {
        item.status = 'annule';
        item.dateAnnule = new Date();
        this.service.update(item).subscribe(data => {
            this.projetBMList = data;
        });
        // item.status = 'annule';
    }

    update(item: ProjetBM) {
        console.log(item.advancement);
        this.projetBM = item;
    }

    getByYearAndWeekBetween() {
        this.service.getByYearAndWeekBetween(this.year, this.weekMin, this.weekMax).subscribe(data => {
          this.projetBMList = data;
        });
    }
}
