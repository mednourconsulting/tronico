import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoBloqComponent} from './info-bloq/info-bloq.component';
import {RealisationComponent} from './realisation/realisation.component';
import {OtdWComponent} from './otd-w/otd-w.component';
import {ParetoOtdComponent} from './pareto-otd/pareto-otd.component';
import {PlanActOtdComponent} from './plan-act-otd/plan-act-otd.component';
import {PcdWComponent} from './pcd-w/pcd-w.component';
import {PlanActPcdComponent} from './plan-act-pcd/plan-act-pcd.component';
import {SyntheseComponent} from './synthese/synthese.component';
import {ProjectBMComponent} from './project-bm/project-bm.component';
import {ProductiviteMComponent} from './productivite-m/productivite-m.component';
import {PlanActProductiviteComponent} from './plan-act-productivite/plan-act-productivite.component';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbTabsetModule,
} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {PrametrageComponent} from './prametrage/prametrage.component';
import {DashboardFragComponent} from './dashboard-frag/dashboard-frag.component';
import {GoogleChartsModule} from 'angular-google-charts';
import { TrsCMSComponent } from './trs-cms/trs-cms.component';
import { PlanActTrsComponent } from './plan-act-trs/plan-act-trs.component';
import { OtwChartComponent } from './otd-w/otw-chart/otw-chart.component';
import {NgxEchartsCoreModule} from 'ngx-echarts/core';
import { TrsChartComponent } from './trs-cms/trs-chart/trs-chart.component';
import { RealisationChartComponent } from './realisation/realisation-chart/realisation-chart.component';
import { PcdChartComponent } from './pcd-w/pcd-chart/pcd-chart.component';
import { ParetoChartComponent } from './pareto-otd/pareto-chart/pareto-chart.component';



@NgModule({
    declarations: [InfoBloqComponent, RealisationComponent, OtdWComponent, ParetoOtdComponent,
        PlanActOtdComponent, PcdWComponent, PlanActPcdComponent, SyntheseComponent,
        ProjectBMComponent, ProductiviteMComponent, PlanActProductiviteComponent, PrametrageComponent,
        DashboardFragComponent, TrsCMSComponent, PlanActTrsComponent, PlanActTrsComponent,
        OtwChartComponent, TrsChartComponent, RealisationChartComponent, PcdChartComponent, PcdChartComponent, ParetoChartComponent],
    imports: [
        CommonModule,
        NbCardModule,
        FormsModule,
        NbInputModule,
        ReactiveFormsModule,
        NbAccordionModule,
        NbSelectModule,
        Ng2SmartTableModule,
        MatFormFieldModule,
        MatSelectModule,
        NbTabsetModule,
        NbButtonModule,
        GoogleChartsModule,
        NgxEchartsCoreModule,
    ],
    exports: [
        InfoBloqComponent,
        OtdWComponent,
        ParetoOtdComponent,
        PlanActOtdComponent,
        PcdWComponent,
        PlanActPcdComponent,
        PlanActTrsComponent,
        SyntheseComponent,
        ProjectBMComponent,
        ProductiviteMComponent,
        RealisationComponent,
        PlanActProductiviteComponent,
        PrametrageComponent,
        DashboardFragComponent,
        TrsCMSComponent,
        PlanActTrsComponent,
        ParetoChartComponent,
        OtwChartComponent,
        PcdChartComponent,
        TrsChartComponent,
        RealisationChartComponent,
    ],
})
export class MycomponentsModule { }
