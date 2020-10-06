import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EiffelRoutingModule} from './eiffel-routing.module';
import {EiffelComponent} from './eiffel.component';
import {InfoBloqEiffelComponent} from './info-bloq-eiffel/info-bloq-eiffel.component';
import {OtdWEiffelComponent} from './otd-weiffel/otd-weiffel.component';
import {ParetoOtdWItemEiffelComponent} from './pareto-otd-witem-eiffel/pareto-otd-witem-eiffel.component';
import {PcdWEiffelComponent} from './pcd-weiffel/pcd-weiffel.component';
import {SynthseEiffelComponent} from './synthse-eiffel/synthse-eiffel.component';
import {ProductiviteMEiffelComponent} from './productivite-meiffel/productivite-meiffel.component';
import {PlanActProductiviteMEiffelComponent} from './plan-act-productivite-meiffel/plan-act-productivite-meiffel.component';
import {ProjectBMEiffelComponent} from './project-bmeiffel/project-bmeiffel.component';
import {PlanActPcdWEiffelComponent} from './plan-act-pcd-weiffel/plan-act-pcd-weiffel.component';
import {PlanActOtdWEiffelComponent} from './plan-act-otd-weiffel/plan-act-otd-weiffel.component';
import {RealisationEiffelComponent} from './realisation-eiffel/realisation-eiffel.component';
import {ParetoOtdWEiffelComponent} from './pareto-otd-weiffel/pareto-otd-weiffel.component';
import {MycomponentsModule} from '../mycomponents/mycomponents.module';
import { ParametrageEiffelComponent } from './parametrage-eiffel/parametrage-eiffel.component';
import { DashboardFragEiffelComponent } from './dashboard-frag-eiffel/dashboard-frag-eiffel.component';

import { TrsCmsComponent } from './trs-cms/trs-cms.component';


@NgModule({
  declarations: [EiffelComponent, InfoBloqEiffelComponent, OtdWEiffelComponent,
    ParetoOtdWItemEiffelComponent, PcdWEiffelComponent, SynthseEiffelComponent,
    ProductiviteMEiffelComponent, PlanActProductiviteMEiffelComponent, ProjectBMEiffelComponent,
    PlanActPcdWEiffelComponent , PlanActOtdWEiffelComponent, RealisationEiffelComponent,
    ParetoOtdWEiffelComponent, ParametrageEiffelComponent, DashboardFragEiffelComponent, TrsCmsComponent],
  imports: [
    CommonModule,
    EiffelRoutingModule,
    MycomponentsModule,
  ],
})
export class EiffelModule { }
