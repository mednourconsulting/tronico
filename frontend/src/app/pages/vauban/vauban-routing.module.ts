import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VaubanComponent} from './vauban.component';
import {InfoBloqVaubanComponent} from './info-bloq-vauban/info-bloq-vauban.component';
import {OtdWVaubanComponent} from './otd-wvauban/otd-wvauban.component';
import {ParetOtdWVaubanComponent} from './paret-otd-wvauban/paret-otd-wvauban.component';
import {PlanActOtdWVaubanComponent} from './plan-act-otd-wvauban/plan-act-otd-wvauban.component';
import {PcdWVaubanComponent} from './pcd-wvauban/pcd-wvauban.component';
import {ProjectBMVaubanComponent} from './project-bmvauban/project-bmvauban.component';
import {ProductiviteMVaubanComponent} from './productivite-mvauban/productivite-mvauban.component';
import {PlanActProductiviteMVaubanComponent} from './plan-act-productivite-mvauban/plan-act-productivite-mvauban.component';
import {RealisationVaubanComponent} from './realisation-vauban/realisation-vauban.component';
import {ParametrageVaubanComponent} from './parametrage-vauban/parametrage-vauban.component';
import {ParametrageEiffelComponent} from '../eiffel/parametrage-eiffel/parametrage-eiffel.component';
import {DashboardFragVaubanComponent} from './dashboard-frag-vauban/dashboard-frag-vauban.component';


const routes: Routes = [{
  path: '',
  component: VaubanComponent,
  children: [{
    path: 'infobloq',
    component: InfoBloqVaubanComponent,
  }, {
    path: 'realisation',
    component: RealisationVaubanComponent,
  },
    {
      path: 'otd',
      component: OtdWVaubanComponent,
    }, {
      path: 'paretootd',
      component: ParetOtdWVaubanComponent,
    }, {
      path: 'planactotdw',
      component: PlanActOtdWVaubanComponent,
    },
    {
      path: 'pcdW',
      component: PcdWVaubanComponent,
    }, {
      path: 'planactpcdw',
      component: PlanActOtdWVaubanComponent,
    }, {
      path: 'projectBM',
      component: ProjectBMVaubanComponent,
    }, {
      path: 'productivitem',
      component: ProductiviteMVaubanComponent,
    }, {
      path: 'planactproductivite',
      component: PlanActProductiviteMVaubanComponent,
    },
    {
      path: 'parametrage',
      component: ParametrageVaubanComponent,
    }, {
      path: 'dashboardfrag',
      component: DashboardFragVaubanComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaubanRoutingModule {
}
