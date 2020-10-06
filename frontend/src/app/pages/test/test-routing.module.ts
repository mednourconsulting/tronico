import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test.component';
import {InfoBloqTestComponent} from './info-bloq-test/info-bloq-test.component';
import {RealisationTestComponent} from './realisation-test/realisation-test.component';
import {OtdWTestComponent} from './otd-wtest/otd-wtest.component';
import {ParetoOtdWTestComponent} from './pareto-otd-wtest/pareto-otd-wtest.component';
import {PlanActOtdWTestComponent} from './plan-act-otd-wtest/plan-act-otd-wtest.component';
import {ProjectBMTestComponent} from './project-bmtest/project-bmtest.component';
import {ProductiviteMTestComponent} from './productivite-mtest/productivite-mtest.component';
import {PlanActProductiviteMTestComponent} from './plan-act-productivite-mtest/plan-act-productivite-mtest.component';
import {PcdWTestComponent} from './pcd-wtest/pcd-wtest.component';
import {ParametrageTestComponent} from './parametrage-test/parametrage-test.component';
import {DashboardFragTestComponent} from './dashboard-frag-test/dashboard-frag-test.component';
import {PlanActPcdWTestComponent} from './plan-act-pcd-wtest/plan-act-pcd-wtest.component';


const routes: Routes = [{
  path: '',
  component: TestComponent,
  children: [{
    path: 'infobloq',
    component: InfoBloqTestComponent,
  }, {
    path: 'realisation',
    component: RealisationTestComponent,
  },
    {
      path: 'otd',
      component: OtdWTestComponent,
    }, {
      path: 'paretootd',
      component: ParetoOtdWTestComponent,
    }, {
      path: 'planactotdw',
      component: PlanActOtdWTestComponent,
    },
    {
      path: 'pcdW',
      component: PcdWTestComponent,
    }, {
      path: 'planactpcdw',
      component: PlanActPcdWTestComponent,
    }, {
      path: 'projectBM',
      component: ProjectBMTestComponent,
    }, {
      path: 'productivitem',
      component: ProductiviteMTestComponent,
    }, {
      path: 'planactproductivite',
      component: PlanActProductiviteMTestComponent,
    },
    {
      path: 'parametrage',
      component: ParametrageTestComponent,
    }, {
      path: 'dashboardfrag',
      component: DashboardFragTestComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule { }
