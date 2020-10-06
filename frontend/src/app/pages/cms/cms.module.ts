import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CmsRoutingModule} from './cms-routing.module';
import {CmsComponent} from './cms.component';
import {InfoBloqCMSComponent} from './info-bloq-cms/info-bloq-cms.component';
import {RealisationCMSComponent} from './realisation-cms/realisation-cms.component';
import {OtdWCMSComponent} from './otd-wcms/otd-wcms.component';
import {ParetoOtdWCMSComponent} from './pareto-otd-wcms/pareto-otd-wcms.component';
import {ParetoOtdWItemCMSComponent} from './pareto-otd-witem-cms/pareto-otd-witem-cms.component';
import {PlanActOtdWCMSComponent} from './plan-act-otd-wcms/plan-act-otd-wcms.component';
import {PcdWCMSComponent} from './pcd-wcms/pcd-wcms.component';
import {PlanActPcdWCMSComponent} from './plan-act-pcd-wcms/plan-act-pcd-wcms.component';
import {SyntheseCMSComponent} from './synthese-cms/synthese-cms.component';
import {ProjectBMCMSComponent} from './project-bmcms/project-bmcms.component';
import {ProductiviteMCMSComponent} from './productivite-mcms/productivite-mcms.component';
import {PlanActProductiviteMCMSComponent} from './plan-act-productivite-mcms/plan-act-productivite-mcms.component';
import {MycomponentsModule} from '../mycomponents/mycomponents.module';
import {ParametrageCmsComponent} from './parametrage-cms/parametrage-cms.component';
import {DashboardFragCmsComponent} from './dashboard-frag-cms/dashboard-frag-cms.component';
import { TrsComponent } from './trs/trs.component';
import { PlanActTrsCmsComponent } from './plan-act-trs-cms/plan-act-trs-cms.component';
import { ReportingListCmsComponent } from './reporting-list-cms/reporting-list-cms.component';


@NgModule({
  declarations: [CmsComponent, InfoBloqCMSComponent, RealisationCMSComponent,
    OtdWCMSComponent, ParetoOtdWCMSComponent, ParetoOtdWItemCMSComponent,
    PlanActOtdWCMSComponent, PcdWCMSComponent, PlanActPcdWCMSComponent,
    SyntheseCMSComponent, ProjectBMCMSComponent, ProductiviteMCMSComponent,
    PlanActProductiviteMCMSComponent, ParametrageCmsComponent, DashboardFragCmsComponent, TrsComponent, PlanActTrsCmsComponent, ReportingListCmsComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    MycomponentsModule,
  ],
})
export class CmsModule { }
