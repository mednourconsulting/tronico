import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { InfoBloqTestComponent } from './info-bloq-test/info-bloq-test.component';
import { RealisationTestComponent } from './realisation-test/realisation-test.component';
import { OtdWTestComponent } from './otd-wtest/otd-wtest.component';
import { ParetoOtdWTestComponent } from './pareto-otd-wtest/pareto-otd-wtest.component';
import { ParetoOtdWItemTestComponent } from './pareto-otd-witem-test/pareto-otd-witem-test.component';
import { PlanActOtdWTestComponent } from './plan-act-otd-wtest/plan-act-otd-wtest.component';
import { PcdWTestComponent } from './pcd-wtest/pcd-wtest.component';
import { PlanActPcdWTestComponent } from './plan-act-pcd-wtest/plan-act-pcd-wtest.component';
import { SynthseTestComponent } from './synthse-test/synthse-test.component';
import { ProjectBMTestComponent } from './project-bmtest/project-bmtest.component';
import { ProductiviteMTestComponent } from './productivite-mtest/productivite-mtest.component';
import { PlanActProductiviteMTestComponent } from './plan-act-productivite-mtest/plan-act-productivite-mtest.component';
import {MycomponentsModule} from '../mycomponents/mycomponents.module';
import { ParametrageTestComponent } from './parametrage-test/parametrage-test.component';
import { DashboardFragTestComponent } from './dashboard-frag-test/dashboard-frag-test.component';


@NgModule({
  declarations: [TestComponent, InfoBloqTestComponent, RealisationTestComponent, OtdWTestComponent,
    ParetoOtdWTestComponent, ParetoOtdWItemTestComponent, PlanActOtdWTestComponent, PcdWTestComponent,
    PlanActPcdWTestComponent, SynthseTestComponent, ProjectBMTestComponent, ProductiviteMTestComponent, PlanActProductiviteMTestComponent, ParametrageTestComponent, DashboardFragTestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    MycomponentsModule,
  ],
})
export class TestModule { }
