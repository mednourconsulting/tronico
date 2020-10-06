import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EiffelComponent} from './eiffel.component';
import {InfoBloqEiffelComponent} from './info-bloq-eiffel/info-bloq-eiffel.component';
import {RealisationEiffelComponent} from './realisation-eiffel/realisation-eiffel.component';
import {OtdWEiffelComponent} from './otd-weiffel/otd-weiffel.component';
import {ParetoOtdWEiffelComponent} from './pareto-otd-weiffel/pareto-otd-weiffel.component';
import {PlanActOtdWEiffelComponent} from './plan-act-otd-weiffel/plan-act-otd-weiffel.component';
import {ProjectBMEiffelComponent} from './project-bmeiffel/project-bmeiffel.component';
import {ProductiviteMEiffelComponent} from './productivite-meiffel/productivite-meiffel.component';
import {PlanActProductiviteMEiffelComponent} from './plan-act-productivite-meiffel/plan-act-productivite-meiffel.component';
import {PcdWEiffelComponent} from './pcd-weiffel/pcd-weiffel.component';
import {ParametrageEiffelComponent} from './parametrage-eiffel/parametrage-eiffel.component';
import {DashboardFragEiffelComponent} from './dashboard-frag-eiffel/dashboard-frag-eiffel.component';
import {PlanActPcdWEiffelComponent} from './plan-act-pcd-weiffel/plan-act-pcd-weiffel.component';


const routes: Routes = [{
  path: '',
  component: EiffelComponent,
  children: [{
    path: 'infobloq',
    component: InfoBloqEiffelComponent,
  }, {
    path: 'realisation',
    component: RealisationEiffelComponent,
  },
    {
      path: 'otd',
      component: OtdWEiffelComponent,
    }, {
      path: 'paretootd',
      component: ParetoOtdWEiffelComponent,
    }, {
      path: 'planactotdw',
      component: PlanActOtdWEiffelComponent,
    },
    {
      path: 'pcdW',
      component: PcdWEiffelComponent,
    }, {
      path: 'planactpcdw',
      component: PlanActPcdWEiffelComponent,
    },
    {
      path: 'projectBM',
      component: ProjectBMEiffelComponent,
    }, {
      path: 'productivitem',
      component: ProductiviteMEiffelComponent,
    }, {
      path: 'planactproductivite',
      component: PlanActProductiviteMEiffelComponent,
    }
    , {
      path: 'parametrage',
      component: ParametrageEiffelComponent,
    }, {
      path: 'dashboardfrag',
      component: DashboardFragEiffelComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EiffelRoutingModule { }
