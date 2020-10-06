/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {NbMenuItem} from '@nebular/theme';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class PagesMenu {

  getMenu(): Observable<NbMenuItem[]> {
    const dashboardMenu = [
      {
      title: '',
   },
      {
        title: '',
      },
    ];
    const dashboard = [
      {
         title: 'E-commerce',
        icon: 'shopping-cart-outline',
        link: '/pages/iot-dashboard',
         home: true,
       children: undefined,
      },
      {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/pages/dashboard',
        children: undefined,
      },
    ];
    const menu = [
      {
        title: 'Ateliers',
        group: true,
      },
      {
        title: 'Ordonance',
        icon: 'layers-outline',
        children: [
          {
            title: 'Evolution des heures',
            link: '/pages/ordonance/evolutionheures',
          },
          {
            title: 'Spleet ecart Of',
            link: '/pages/ordonance/spleetecartof',
          },
        ],
      },
      {
        title: 'CMS',
        icon: 'calendar-outline',
        children: [
          {
            title: 'Info bloquant',
            link: '/pages/cms/infobloq',
          } , {
            title: 'Realisation',
            link: '/pages/cms/realisation',
          } , {
            title: 'Trs',
            link: '/pages/cms/trs',
          } , {
            title: 'Otd',
            link: '/pages/cms/otd',
          } , {
            title: 'Pcd',
            link: '/pages/cms/pcdW',
          } , {
            title: 'Pareto Otd',
            link: '/pages/cms/paretootd',
          } , {
            title: 'Plan Act OTd',
            link: '/pages/cms/planactotdw',
          },
          {
            title: 'Plan Act Trs',
            link: '/pages/cms/PlanActTrs',
          },
          {
            title: 'Plan Act Pcd',
            link: '/pages/cms/planactpcdw',
          },
          {
            title: 'Project BM',
            link: '/pages/cms/projectBM',
          },
          {
            title: 'Productivite Mensuel',
            link: '/pages/cms/productivitem',
          },
          {
            title: 'Plan Action Productivite Mensuel',
            link: '/pages/cms/planactproductivite',
          },
          {
            title: 'Parametrage',
            link: '/pages/cms/parametrage',
          },
          {
            title: 'Reporting',
            link: '/pages/cms/dashboardfrag',
          },
        ],
      },
      {
        title: 'Eiffel',
        icon: 'navigation-outline',
        children: [

          {
            title: 'Info bloquant',
            link: '/pages/eiffel/infobloq',
          },
          {
            title: 'Realisation',
            link: '/pages/eiffel/realisation',
          },
          {
            title: 'Otd',
            link: '/pages/eiffel/otd',
          },
          {
            title: 'Pareto Otd',
            link: '/pages/eiffel/paretootd',
          },
          {
            title: 'Plan Act OTd',
            link: '/pages/eiffel/planactotdw',
          },
          {
            title: 'Pcd week',
            link: '/pages/eiffel/pcdW',
          },
          {
            title: 'Plan Act Pcd',
            link: '/pages/eiffel/planactpcdw',
          },
          {
            title: 'Project BM',
            link: '/pages/eiffel/projectBM',
          },
          {
            title: 'Productivite Mensuel',
            link: '/pages/eiffel/productivitem',
          },
          {
            title: 'Plan Action Productivite Mensuel',
            link: '/pages/eiffel/planactproductivite',
          },
          {
            title: 'Parametrage',
            link: '/pages/eiffel/parametrage',
          },
          {
            title: 'Reporting',
            link: '/pages/eiffel/dashboardfrag',
          },
        ],
      },
      {
        title: 'Vauban',
        icon: 'cube-outline',
        children: [
          {
            title: 'Info bloquant',
            link: '/pages/vauban/infobloq',
          },
          {
            title: 'Realisation',
            link: '/pages/vauban/realisation',
          },
          {
            title: 'Otd',
            link: '/pages/vauban/otd',
          },
          {
            title: 'Pareto Otd',
            link: '/pages/vauban/paretootd',
          },
          {
            title: 'Plan Act OTd',
            link: '/pages/vauban/planactotdw',
          },
          {
            title: 'Pcd week',
            link: '/pages/vauban/pcdW',
          },
          {
            title: 'Plan Act Pcd',
            link: '/pages/vauban/planactpcdw',
          },
          {
            title: 'Project BM',
            link: '/pages/vauban/projectBM',
          },
          {
            title: 'Productivite Mensuel',
            link: '/pages/vauban/productivitem',
          },
          {
            title: 'Plan Action Productivite Mensuel',
            link: '/pages/vauban/planactproductivite',
          },
          {
            title: 'Parametrage',
            link: '/pages/vauban/parametrage',
          },
          {
            title: 'Reporting',
            link: '/pages/vauban/dashboardfrag',
          },
        ],
      },
      {
        title: 'Technique',
        icon: 'settings-outline',
        children: [
          {
            title: 'Info bloquant',
            link: '/pages/technique/infobloq',
          },
          {
            title: 'Realisation',
            link: '/pages/technique/realisation',
          },
          {
            title: 'Otd',
            link: '/pages/technique/otd',
          },
          {
            title: 'Pareto Otd',
            link: '/pages/technique/paretootd',
          },
          {
            title: 'Plan Act OTd',
            link: '/pages/technique/planactotdw',
          },
          {
            title: 'Pcd week',
            link: '/pages/technique/pcdW',
          },
          {
            title: 'Plan Act Pcd',
            link: '/pages/technique/planactpcdw',
          },
          {
            title: 'Project BM',
            link: '/pages/technique/projectBM',
          },
          {
            title: 'Productivite Mensuel',
            link: '/pages/technique/productivitem',
          },
          {
            title: 'Plan Action Productivite Mensuel',
            link: '/pages/technique/planactproductivite',
          },
          {
            title: 'Parametrage',
            link: '/pages/technique/parametrage',
          },
          {
            title: 'Reporting',
            link: '/pages/technique/dashboardfrag',
          },
        ],
      },
      {
        title: 'Test',
        icon: 'options-2-outline',
        children: [
          {
            title: 'Info bloquant',
            link: '/pages/test/infobloq',
          },
          {
            title: 'Realisation',
            link: '/pages/test/realisation',
          },
          {
            title: 'Otd',
            link: '/pages/test/otd',
          },
          {
            title: 'Pareto Otd',
            link: '/pages/test/paretootd',
          },
          {
            title: 'Plan Act OTd',
            link: '/pages/test/planactotdw',
          },
          {
            title: 'Pcd week',
            link: '/pages/test/pcdW',
          },
          {
            title: 'Plan Act Pcd',
            link: '/pages/test/planactpcdw',
          },
          {
            title: 'Project BM',
            link: '/pages/test/projectBM',
          },
          {
            title: 'Productivite Mensuel',
            link: '/pages/test/productivitem',
          },
          {
            title: 'Plan Action Productivite Mensuel',
            link: '/pages/test/planactproductivite',
          },
          {
            title: 'Parametrage',
            link: '/pages/test/parametrage',
          },
          {
            title: 'Reporting',
            link: '/pages/test/dashboardfrag',
          },
        ],
      },
      {
        title: 'Magasin',
        icon: 'home-outline',
        children: [
          {
            title: 'Info bloquant',
            link: '/pages/magasin/infobloq',
          },
          {
            title: 'Realisation',
            link: '/pages/magasin/realisation',
          },
          {
            title: 'Otd',
            link: '/pages/magasin/otd',
          },
          {
            title: 'Pareto Otd',
            link: '/pages/magasin/paretootd',
          },
          {
            title: 'Plan Act OTd',
            link: '/pages/magasin/planactotdw',
          },
          {
            title: 'Pcd week',
            link: '/pages/magasin/pcdW',
          },
          {
            title: 'Plan Act Pcd',
            link: '/pages/magasin/planactpcdw',
          },
          {
            title: 'Project BM',
            link: '/pages/magasin/projectBM',
          },
          {
            title: 'Productivite Mensuel',
            link: '/pages/magasin/productivitem',
          },
          {
            title: 'Plan Action Productivite Mensuel',
            link: '/pages/magasin/planactproductivite',
          },
          {
            title: 'Parametrage',
            link: '/pages/magasin/parametrage',
          },
          {
            title: 'Reporting',
            link: '/pages/magasin/dashboardfrag',
          },
        ],
      },
      {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
          {
            title: 'Login',
            link: '/auth/login',
          },
          {
            title: 'Logout',
            link: '/auth/logout',
          },
          {
            title: 'Register',
            link: '/auth/register',
          },
          {
            title: 'Request Password',
            link: '/auth/request-password',
          },
          {
            title: 'Reset Password',
            link: '/auth/reset-password',
          },
        ],
      },
    ];

    return of([...dashboardMenu, ...dashboard, ...menu]);
  }
}
