import {Component, Input, OnInit} from '@angular/core';
import {ProductionMensuel} from '../../model/ProductionMensuel';
import {NbColorHelper, NbThemeService} from '@nebular/theme';
import {ProductionMensuelService} from '../../../@core/backend/common/services/ProductionMensuel.service';
import {LocalDataSource} from 'ng2-smart-table';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';
import {WeekMonthService} from '../../../@core/backend/common/services/WeekMonth.Service';
import {ConfigProductiviteMensuelService} from '../../../@core/backend/common/services/ConfigProductiviteMensuel.service';
import {UsersService} from '../../../@core/backend/common/services/users.service';

@Component({
    selector: 'ngx-productivite-m',
    templateUrl: './productivite-m.component.html',
    styleUrls: ['./productivite-m.component.scss'],
    providers: [ProductionMensuelService, WeekMonthService, ConfigProductiviteMensuelService, UsersService],
})
export class ProductiviteMComponent implements OnInit {
    @Input('atelier') atelier: string;
    isGranted: boolean;
    isAdmin: boolean;
    productivite: ProductionMensuel = new ProductionMensuel();
    OBJECTIF: number;
    source: LocalDataSource = new LocalDataSource();
    total: { productivite: number; objectif: number; ecart: number };
    count: number;
    lenght: number;
    themeSubscription: Subscription;
    data: any;
    options: any;
    collection = [
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
                title: 'moins',
                type: 'number',
                editable: false,
            },
            productivite: {
                title: 'Productivite',
                type: 'number',
            },
            objectif: {
                title: 'Objéctif',
                type: 'number',
            },
            ecart: {
                title: 'Ecart',
                type: 'number',
            },
        },
    };
    monthFirst: any;
    monthFin: any;
    year: any;
    stackedChart = {
        title: 'Productivite  par Mois',
        typeChart: 'AreaChart',
        columnNames: ['Semaine', ' Productivite (%)', 'Objectif (%)'],
        options: {
            hAxis: {
                title: 'Mois',
            },
            vAxis: {title: 'Productivite (%)'},
        },
        width: 550,
        height: 400,
        data: [['0', 0, 0]],
    };
    chartType = [{type: 'LineChart', name: 'Line'}, {type: 'AreaChart', name: 'Area '}, {type: 'BarChart', name: 'Bar'},
        {type: 'ColumnChart', name: 'Column'}];
    Data = [];

    constructor(private theme: NbThemeService, private service: ProductionMensuelService, private toaster: ToastrService, private userservice: UsersService,
                private  monthService: WeekMonthService, private configProductiviteMensuelService: ConfigProductiviteMensuelService) {

    }

    init() {
        this.service.get(this.atelier).subscribe(data => {
            this.source = data;
        });
        this.configProductiviteMensuelService.getConfigByYear(this.atelier, (new Date()).getFullYear()).subscribe(data => {
            this.productivite.objectif = data.objectif;
            this.OBJECTIF = data.objectif;
        });
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

    createConfirm(event: any) {
        event.newData.ecart = event.newData.objectif - event.newData.heuresRealise;
        event.confirm.resolve(event.newData);
        this.service.create(event.newData).subscribe(data => {
        });
        this.toaster.info('', 'Update');
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

    refresh() {
        this.service.get(this.atelier).subscribe(data => {
            this.source = data;
        });

    }

    save() {
        this.productivite.ecart = this.productivite.objectif - this.productivite.productivite;
        this.productivite.atelier = this.atelier;
        this.productivite.year = new Date().getFullYear();
        this.service.getByAtelierWeekYear(this.atelier, new Date().getFullYear(), this.productivite.month).subscribe(data => {
            if (data != null) {
                this.toaster.warning('Info déja dans la base de données', 'Alert');
            } else {
                this.service.create(this.productivite).subscribe(dataCreate => {
                  console.log(dataCreate);
                });
                this.toaster.success('Ajouté avec succès', 'create');
            }
        });
        this.init();
    }

    onSaveConfirm(event: any) {

        event.newData.atelier = this.atelier;
        event.newData.ecart = event.newData.objectif - event.newData.productivite;
        event.confirm.resolve(event.newData);
        this.service.update(event.newData).subscribe(data => {
        });
        this.toaster.info('modifé les donnes  ', 'update');
        this.init();
    }

    chart(value: any) {
        console.log(value);
        this.total = {'productivite': 0, 'objectif': 0, 'ecart': 0};
        this.service.getAll(this.atelier, (new Date()).getFullYear()).subscribe(data => {
            this.count = Object.keys(data).length;
            console.log(this.total.productivite);
            this.lenght = Object.getOwnPropertySymbols(data).length;
            for (let i = 0; i < this.count + this.lenght; i++) {
                this.total.ecart = data[i].ecart + this.total.ecart;
                this.total.productivite = data[i].productivite + this.total.productivite;
                this.total.objectif = data[i].objectif + this.total.objectif;
                if ('' + value === '' + data[i].month) {
                    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

                        const colors: any = config.variables;
                        const chartjs: any = config.variables.chartjs;

                        this.data = {
                            labels: ['Productivite: ' + data[i].productivite, 'Objectif: ' + data[i].objectif, 'Ecart: ' + data[i].ecart],
                            datasets: [{
                                data: [data[i].productivite, data[i].objectif, data[i].ecart],
                                label: 'Realisation : M' + value,
                                backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
                            }],
                        };
                        this.options = {
                            maintainAspectRatio: false,
                            responsive: true,
                            legend: {
                                labels: {
                                    fontColor: chartjs.textColor,
                                },
                            },
                            scales: {
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false,
                                            color: chartjs.axisLineColor,
                                        },
                                        ticks: {
                                            fontColor: chartjs.textColor,
                                        },
                                    },
                                ],
                                yAxes: [
                                    {
                                        gridLines: {
                                            display: true,
                                            color: chartjs.axisLineColor,
                                        },
                                        ticks: {
                                            fontColor: chartjs.textColor,
                                        },
                                    },
                                ],
                            },
                        };
                    });
                }

                if ('' + value === 'total') {
                    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
                        const colors: any = config.variables;
                        const chartjs: any = config.variables.chartjs;
                        this.data = {
                            labels: ['Heures réalisées: ' + this.total.productivite, 'Objectif: ' + this.total.objectif, 'Ecart: ' + this.total.ecart],
                            datasets: [{
                                data: [this.total.productivite, this.total.objectif, this.total.ecart],
                                // this.service.getChartData(new Date().getFullYear()),
                                label: 'Realisation : ' + value,
                                backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
                            }],
                        };
                        this.options = {
                            maintainAspectRatio: false,
                            responsive: true,
                            legend: {
                                labels: {
                                    fontColor: chartjs.textColor,
                                },
                            },
                            scales: {
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false,
                                            color: chartjs.axisLineColor,
                                        },
                                        ticks: {
                                            fontColor: chartjs.textColor,
                                        },
                                    },
                                ],
                                yAxes: [
                                    {
                                        gridLines: {
                                            display: true,
                                            color: chartjs.axisLineColor,
                                        },
                                        ticks: {
                                            fontColor: chartjs.textColor,
                                        },
                                    },
                                ],
                            },
                        };
                    });
                }
            }
        });
    }

    searchFor() {
        if (this.monthFirst < this.monthFin) {
            this.service.getAll(this.atelier, this.year).subscribe(data => {
                if (Object.keys(data).length === 0) {
                    this.toaster.info('il n\'y a aucun d\'information au les semaines specifie ', 'Info');
                } else {
                    this.Data = [];
                    data.forEach(obj => {
                        if (obj.month >= this.monthFirst) {
                            if (obj.month <= this.monthFin) {
                                this.Data.push([obj.month, Number(obj.objectif), Number(obj.productivite)]);
                                console.log(this.Data);
                            }
                        }
                    });

                    this.stackedChart = {
                        title: 'OTD [ Mois: [S' + this.monthFirst + ', S' + this.monthFin + '] , Années: [' + this.year + ']].',
                        typeChart: 'AreaChart',
                        columnNames: ['Mois', 'Productivite (%)', 'Objectif (%)'],
                        options: {
                            hAxis: {
                                title: 'Mois',
                            },
                            vAxis: {title: 'Productivite (%)'},
                        },
                        width: 550,
                        height: 400,
                        data: this.Data,
                    };
                }
            });
        } else {
            this.toaster.info('le premier semaine doit être inférieur au dernier', 'Attention');
        }
        this.init();
    }


}



