import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MagasinComponent} from './magasin.component';
import {InfoBloqMagasinComponent} from './info-bloq-magasin/info-bloq-magasin.component';
import {RealisationMagasinComponent} from './realisation-magasin/realisation-magasin.component';
import {OtdWMagasinComponent} from './otd-wmagasin/otd-wmagasin.component';
import {ParetoOtdWMagasinComponent} from './pareto-otd-wmagasin/pareto-otd-wmagasin.component';
import {PlanActOtdWMagasinComponent} from './plan-act-otd-wmagasin/plan-act-otd-wmagasin.component';
import {ProjectBMMagasinComponent} from './project-bmmagasin/project-bmmagasin.component';
import {ProductiviteMMagasinComponent} from './productivite-mmagasin/productivite-mmagasin.component';
import {PcdWMagasinComponent} from './pcd-wmagasin/pcd-wmagasin.component';
import {PlanActProductiviteMMagasinComponent} from './plan-act-productivite-mmagasin/plan-act-productivite-mmagasin.component';
import {ParametrageMagasinComponent} from './parametrage-magasin/parametrage-magasin.component';
import {DashboardFragMagasinComponent} from './dashboard-frag-magasin/dashboard-frag-magasin.component';
import {PlanActPcdWMagasinComponent} from './plan-act-pcd-wmagasin/plan-act-pcd-wmagasin.component';


const routes: Routes = [{
  path: '',
  component: MagasinComponent,
  children: [{
    path: 'infobloq',
    component: InfoBloqMagasinComponent,
  }, {
    path: 'realisation',
    component: RealisationMagasinComponent,
  },
    {
      path: 'otd',
      component: OtdWMagasinComponent,
    }, {
      path: 'paretootd',
      component: ParetoOtdWMagasinComponent,
    }, {
      path: 'planactotdw',
      component: PlanActOtdWMagasinComponent,
    },
    {
      path: 'pcdW',
      component: PcdWMagasinComponent,
    }, {
      path: 'planactpcdw',
      component: PlanActPcdWMagasinComponent,
    }, {
      path: 'projectBM',
      component: ProjectBMMagasinComponent,
    }, {
      path: 'productivitem',
      component: ProductiviteMMagasinComponent,
    }, {
      path: 'planactproductivite',
      component: PlanActProductiviteMMagasinComponent,
    },
    {
      path: 'parametrage',
      component: ParametrageMagasinComponent,
    }, {
      path: 'dashboardfrag',
      component: DashboardFragMagasinComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagasinRoutingModule { }
