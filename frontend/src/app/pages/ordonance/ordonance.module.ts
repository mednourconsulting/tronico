import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdonanceRoutingModule} from './ordonance-routing.module';
import {OrdonanceComponent} from './ordonance.component';
import {EvolutionheuresComponent} from './evolutionheures/evolutionheures.component';
import {SpleetEcartOfComponent} from './spleet-ecart-of/spleet-ecart-of.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbCardModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxEchartsCoreModule} from 'ngx-echarts/core';
import {ChartModule} from 'angular2-chartjs';
import {NbSecurityModule} from '@nebular/security';
import {GoogleChartsModule} from "angular-google-charts";
import { EvolutionHChartComponent } from './evolutionheures/evolution-hchart/evolution-hchart.component';
import {ChartsModule} from "angular-bootstrap-md";


@NgModule({
    declarations: [OrdonanceComponent, EvolutionheuresComponent, SpleetEcartOfComponent, EvolutionHChartComponent],
    imports: [
        CommonModule,
        OrdonanceRoutingModule,
        Ng2SmartTableModule,
        NbCardModule,
        FormsModule,
        NbInputModule,
        NgxEchartsCoreModule,
        ChartModule,
        NbSecurityModule,
        NbSelectModule,
        ReactiveFormsModule,
        GoogleChartsModule,
        ChartsModule,
    ],
    exports: [
        SpleetEcartOfComponent
    ]
})
export class OrdonanceModule { }
