/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ECommerceComponent} from './e-commerce/e-commerce.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {AtelierChartComponent} from './atelier-chart/atelier-chart.component';
import {AtelierInfoComponent} from './atelier-info/atelier-info.component';
import {Dashboard1Component} from './Dashboard1/dashboard1.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: Dashboard1Component,

    },
    {
      path: 'atelierChart',
      component: AtelierChartComponent,
    },
    {
    path: 'atelierInfo',
    component: AtelierInfoComponent,
},
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
      loadChildren: () => import('./dashboard/dashboard.module')
          .then(m => m.DashboardModule),
    },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule),
    },
    {
      path: 'ordonance',
      loadChildren: () => import('./ordonance/ordonance.module')
        .then(m => m.OrdonanceModule),
    },
    {
      path: 'vauban',
      loadChildren: () => import('./vauban/vauban.module')
        .then(m => m.VaubanModule),
    },
    {
      path: 'cms',
      loadChildren: () => import('./cms/cms.module')
        .then(m => m.CmsModule),
    },
    {
      path: 'eiffel',
      loadChildren: () => import('./eiffel/eiffel.module')
        .then(m => m.EiffelModule),
    },
    {
      path: 'technique',
      loadChildren: () => import('./technique/technique.module')
        .then(m => m.TechniqueModule),
    },
    {
      path: 'test',
      loadChildren: () => import('./test/test.module')
        .then(m => m.TestModule),
    },
    {
      path: 'magasin',
      loadChildren: () => import('./magasin/magasin.module')
        .then(m => m.MagasinModule),
    },
    {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full',
      },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
