import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CmsComponent} from './cms.component';
import {InfoBloqCMSComponent} from './info-bloq-cms/info-bloq-cms.component';
import {RealisationCMSComponent} from './realisation-cms/realisation-cms.component';
import {OtdWCMSComponent} from './otd-wcms/otd-wcms.component';
import {ParetoOtdWCMSComponent} from './pareto-otd-wcms/pareto-otd-wcms.component';
import {PlanActOtdWCMSComponent} from './plan-act-otd-wcms/plan-act-otd-wcms.component';
import {PcdWCMSComponent} from './pcd-wcms/pcd-wcms.component';
import {ProjectBMCMSComponent} from './project-bmcms/project-bmcms.component';
import {ProductiviteMCMSComponent} from './productivite-mcms/productivite-mcms.component';
import {PlanActProductiviteMCMSComponent} from './plan-act-productivite-mcms/plan-act-productivite-mcms.component';
import {ParametrageCmsComponent} from './parametrage-cms/parametrage-cms.component';
import {DashboardFragCmsComponent} from './dashboard-frag-cms/dashboard-frag-cms.component';
import {SyntheseCMSComponent} from './synthese-cms/synthese-cms.component';
import {PlanActPcdWCMSComponent} from './plan-act-pcd-wcms/plan-act-pcd-wcms.component';
import {TrsComponent} from './trs/trs.component';
import {PlanActTrsCmsComponent} from './plan-act-trs-cms/plan-act-trs-cms.component';


const routes: Routes = [{
  path: '',
  component: CmsComponent,
  children: [{
    path: 'infobloq',
    component: InfoBloqCMSComponent,
  },
    {
      path: 'realisation',
      component: RealisationCMSComponent,
    },
    {
      path: 'trs',
      component: TrsComponent,
    },
    {
      path: 'PlanActTrs',
      component: PlanActTrsCmsComponent,
    },
    {
      path: 'otd',
      component: OtdWCMSComponent,
    }, {
      path: 'paretootd',
      component: ParetoOtdWCMSComponent,
    }, {
      path: 'planactotdw',
      component: PlanActOtdWCMSComponent,
    },
    {
      path: 'pcdW',
      component: PcdWCMSComponent,
    }, {
      path: 'planactpcdw',
      component: PlanActPcdWCMSComponent,
    }, {
      path: 'projectBM',
      component: ProjectBMCMSComponent,
    }, {
      path: 'productivitem',
      component: ProductiviteMCMSComponent,
    }, {
    path: 'planactproductivite',
      component: PlanActProductiviteMCMSComponent,
    },
    {
      path: 'parametrage',
      component: ParametrageCmsComponent,
    },
    {
      path: 'dashboardfrag',
      component: DashboardFragCmsComponent,
    },
    {
      path: 'synthese',
      component: SyntheseCMSComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {
}
