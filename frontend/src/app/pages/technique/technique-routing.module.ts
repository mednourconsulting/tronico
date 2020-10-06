import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TechniqueComponent} from './technique.component';
import {InfoBloqTechniqueComponent} from './info-bloq-technique/info-bloq-technique.component';
import {RealisationTechniqueComponent} from './realisation-technique/realisation-technique.component';
import {OtdWTechniqueComponent} from './otd-wtechnique/otd-wtechnique.component';
import {ParetoOtdWTechniqueComponent} from './pareto-otd-wtechnique/pareto-otd-wtechnique.component';
import {PlanActOtdWTechniqueComponent} from './plan-act-otd-wtechnique/plan-act-otd-wtechnique.component';
import {PcdWTechniqueComponent} from './pcd-wtechnique/pcd-wtechnique.component';
import {ProjectBMTechniqueComponent} from './project-bmtechnique/project-bmtechnique.component';
import {ProductiviteMTechniqueComponent} from './productivite-mtechnique/productivite-mtechnique.component';
import {PlanActProductiviteMTechniqueComponent} from './plan-act-productivite-mtechnique/plan-act-productivite-mtechnique.component';
import {ParametrageTechniqueComponent} from './parametrage-technique/parametrage-technique.component';
import {DashboardFragTechniqueComponent} from './dashboard-frag-technique/dashboard-frag-technique.component';
import {PlanActPcdWTechniqueComponent} from './plan-act-pcd-wtechnique/plan-act-pcd-wtechnique.component';


const routes: Routes = [{
  path: '',
  component: TechniqueComponent,
  children: [{
    path: 'infobloq',
    component: InfoBloqTechniqueComponent,
  }, {
    path: 'realisation',
    component: RealisationTechniqueComponent,
  },
    {
      path: 'otd',
      component: OtdWTechniqueComponent,
    }, {
      path: 'paretootd',
      component: ParetoOtdWTechniqueComponent,
    }, {
      path: 'planactotdw',
      component: PlanActOtdWTechniqueComponent,
    },
    {
      path: 'pcdW',
      component: PcdWTechniqueComponent,
    }, {
      path: 'planactpcdw',
      component: PlanActPcdWTechniqueComponent,
    }, {
      path: 'projectBM',
      component: ProjectBMTechniqueComponent,
    }, {
      path: 'productivitem',
      component: ProductiviteMTechniqueComponent,
    }, {
      path: 'planactproductivite',
      component: PlanActProductiviteMTechniqueComponent,
    }, {
      path: 'parametrage',
      component: ParametrageTechniqueComponent,
    }, {
      path: 'dashboardfrag',
      component: DashboardFragTechniqueComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechniqueRoutingModule {
}
