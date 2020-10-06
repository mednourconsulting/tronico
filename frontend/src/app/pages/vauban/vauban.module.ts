import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VaubanRoutingModule} from './vauban-routing.module';
import {VaubanComponent} from './vauban.component';
import {InfoBloqVaubanComponent} from './info-bloq-vauban/info-bloq-vauban.component';
import {MycomponentsModule} from '../mycomponents/mycomponents.module';
import {InfoBloqComponent} from '../mycomponents/info-bloq/info-bloq.component';
import { RealisationVaubanComponent } from './realisation-vauban/realisation-vauban.component';
import { OtdWVaubanComponent } from './otd-wvauban/otd-wvauban.component';
import { ParetOtdWVaubanComponent } from './paret-otd-wvauban/paret-otd-wvauban.component';
import { ParetOtdWItemVaubanComponent } from './paret-otd-witem-vauban/paret-otd-witem-vauban.component';
import { PlanActOtdWVaubanComponent } from './plan-act-otd-wvauban/plan-act-otd-wvauban.component';
import { PcdWVaubanComponent } from './pcd-wvauban/pcd-wvauban.component';
import { PlanActPcdWVaubanComponent } from './plan-act-pcd-wvauban/plan-act-pcd-wvauban.component';
import { SysntheseVaubanComponent } from './sysnthese-vauban/sysnthese-vauban.component';
import { ProjectBMVaubanComponent } from './project-bmvauban/project-bmvauban.component';
import { ProductiviteMVaubanComponent } from './productivite-mvauban/productivite-mvauban.component';
import {PlanActProductiviteMVaubanComponent} from './plan-act-productivite-mvauban/plan-act-productivite-mvauban.component';
import { ParametrageVaubanComponent } from './parametrage-vauban/parametrage-vauban.component';
import { DashboardFragVaubanComponent } from './dashboard-frag-vauban/dashboard-frag-vauban.component';


@NgModule({
  declarations: [VaubanComponent, InfoBloqVaubanComponent, RealisationVaubanComponent,
    OtdWVaubanComponent, ParetOtdWVaubanComponent, ParetOtdWItemVaubanComponent, PlanActOtdWVaubanComponent,
    PcdWVaubanComponent, PlanActPcdWVaubanComponent, SysntheseVaubanComponent, ProjectBMVaubanComponent,
    ProductiviteMVaubanComponent, PlanActProductiviteMVaubanComponent, ParametrageVaubanComponent, DashboardFragVaubanComponent],
  imports: [
    CommonModule,
    VaubanRoutingModule,
    MycomponentsModule,
  ],
})
export class VaubanModule {
}
