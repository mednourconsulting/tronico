/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../@core/backend/common/services/users.service';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-sidebar>
      <nb-sidebar-header style="background-color: white; height: 100px"><a class="logo text-center" href="#"
                                                                           (click)="navigateHome()"><img
          style="width:80% ; background-color: white"
          src="/assets/images/6955f-tronico-atlas.png"></a>
      </nb-sidebar-header>
    </nb-sidebar>
    <nb-layout windowMode>
      <!--nb-layout-header fixed>
          <ngx-header></ngx-header>
      </nb-layout-header-->
      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" style="background-color: #f0c59a">
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {

  navigateHome() {
  }
}
