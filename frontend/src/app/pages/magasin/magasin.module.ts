import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MagasinRoutingModule} from './magasin-routing.module';
import {MagasinComponent} from './magasin.component';
import {InfoBloqMagasinComponent} from './info-bloq-magasin/info-bloq-magasin.component';
import {RealisationMagasinComponent} from './realisation-magasin/realisation-magasin.component';
import {OtdWMagasinComponent} from './otd-wmagasin/otd-wmagasin.component';
import {ParetoOtdWMagasinComponent} from './pareto-otd-wmagasin/pareto-otd-wmagasin.component';
import {ParetoOtdWItemMagasinComponent} from './pareto-otd-witem-magasin/pareto-otd-witem-magasin.component';
import {PlanActOtdWMagasinComponent} from './plan-act-otd-wmagasin/plan-act-otd-wmagasin.component';
import {PcdWMagasinComponent} from './pcd-wmagasin/pcd-wmagasin.component';
import {PlanActPcdWMagasinComponent} from './plan-act-pcd-wmagasin/plan-act-pcd-wmagasin.component';
import {SynthseMagasinComponent} from './synthse-magasin/synthse-magasin.component';
import {ProjectBMMagasinComponent} from './project-bmmagasin/project-bmmagasin.component';
import {ProductiviteMMagasinComponent} from './productivite-mmagasin/productivite-mmagasin.component';
import {PlanActProductiviteMMagasinComponent} from './plan-act-productivite-mmagasin/plan-act-productivite-mmagasin.component';
import {MycomponentsModule} from '../mycomponents/mycomponents.module';
import {ParametrageMagasinComponent} from './parametrage-magasin/parametrage-magasin.component';
import {DashboardFragMagasinComponent} from './dashboard-frag-magasin/dashboard-frag-magasin.component';
import { ReportingListMagasinComponent } from './reporting-list-magasin/reporting-list-magasin.component';


@NgModule({
  declarations: [MagasinComponent, InfoBloqMagasinComponent, RealisationMagasinComponent,
    OtdWMagasinComponent, ParetoOtdWMagasinComponent, ParetoOtdWItemMagasinComponent,
    PlanActOtdWMagasinComponent, PcdWMagasinComponent, PlanActPcdWMagasinComponent,
    SynthseMagasinComponent, ProjectBMMagasinComponent, ProductiviteMMagasinComponent,
    PlanActProductiviteMMagasinComponent, ParametrageMagasinComponent, DashboardFragMagasinComponent, ReportingListMagasinComponent],
  imports: [
    CommonModule,
    MagasinRoutingModule,
    MycomponentsModule,
  ],
})
export class MagasinModule { }
