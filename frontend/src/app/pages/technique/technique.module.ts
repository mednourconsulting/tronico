import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechniqueRoutingModule } from './technique-routing.module';
import { TechniqueComponent } from './technique.component';
import { InfoBloqTechniqueComponent } from './info-bloq-technique/info-bloq-technique.component';
import { RealisationTechniqueComponent } from './realisation-technique/realisation-technique.component';
import { ParetoOtdWTechniqueComponent } from './pareto-otd-wtechnique/pareto-otd-wtechnique.component';
import { ParetoOtdWItemTechniqueComponent } from './pareto-otd-witem-technique/pareto-otd-witem-technique.component';
import { PlanActOtdWTechniqueComponent } from './plan-act-otd-wtechnique/plan-act-otd-wtechnique.component';
import { PcdWTechniqueComponent } from './pcd-wtechnique/pcd-wtechnique.component';
import { PlanActPcdWTechniqueComponent } from './plan-act-pcd-wtechnique/plan-act-pcd-wtechnique.component';
import { SynthseTechniqueComponent } from './synthse-technique/synthse-technique.component';
import { ProjectBMTechniqueComponent } from './project-bmtechnique/project-bmtechnique.component';
import { ProductiviteMTechniqueComponent } from './productivite-mtechnique/productivite-mtechnique.component';
import { PlanActProductiviteMTechniqueComponent } from './plan-act-productivite-mtechnique/plan-act-productivite-mtechnique.component';
import { OtdWTechniqueComponent } from './otd-wtechnique/otd-wtechnique.component';
import {MycomponentsModule} from '../mycomponents/mycomponents.module';
import { ParametrageTechniqueComponent } from './parametrage-technique/parametrage-technique.component';
import { DashboardFragTechniqueComponent } from './dashboard-frag-technique/dashboard-frag-technique.component';


@NgModule({
  declarations: [TechniqueComponent, InfoBloqTechniqueComponent, RealisationTechniqueComponent,
    ParetoOtdWTechniqueComponent, ParetoOtdWItemTechniqueComponent, PlanActOtdWTechniqueComponent,
    PcdWTechniqueComponent, PlanActPcdWTechniqueComponent, SynthseTechniqueComponent, ProjectBMTechniqueComponent,
    ProductiviteMTechniqueComponent, PlanActProductiviteMTechniqueComponent, OtdWTechniqueComponent, ParametrageTechniqueComponent, DashboardFragTechniqueComponent],
  imports: [
    CommonModule,
    TechniqueRoutingModule,
    MycomponentsModule,
  ],
})
export class TechniqueModule { }
