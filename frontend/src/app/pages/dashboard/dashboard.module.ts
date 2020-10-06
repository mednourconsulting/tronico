/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {inject, NgModule} from '@angular/core';
import {
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbPopoverModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbTooltipModule,
  NbUserModule,
} from '@nebular/theme';
import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';
import {DashboardComponent} from './dashboard.component';
import {StatusCardComponent} from './status-card/status-card.component';
import {ContactsComponent} from './contacts/contacts.component';
import {RoomsComponent} from './rooms/rooms.component';
import {RoomSelectorComponent} from './rooms/room-selector/room-selector.component';
import {TemperatureComponent} from './temperature/temperature.component';
import {TemperatureDraggerComponent} from './temperature/temperature-dragger/temperature-dragger.component';
import {KittenComponent} from './kitten/kitten.component';
import {SecurityCamerasComponent} from './security-cameras/security-cameras.component';
import {ElectricityComponent} from './electricity/electricity.component';
import {ElectricityChartComponent} from './electricity/electricity-chart/electricity-chart.component';
import {WeatherComponent} from './weather/weather.component';
import {SolarComponent} from './solar/solar.component';
import {PlayerComponent} from './rooms/player/player.component';
import {TrafficComponent} from './traffic/traffic.component';
import {TrafficChartComponent} from './traffic/traffic-chart.component';
import {FormsModule} from '@angular/forms';
import {StatusCardPlaceholderComponent} from './status-card/status-card-placeholder.component';
import {AuthModule} from '../../@auth/auth.module';
import {GoogleChartsModule} from 'angular-google-charts';
import {TeamComponent} from './team/team.component';
import {NumberCardModule} from '@swimlane/ngx-charts';
import {Router, RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {AtelierChartComponent} from '../atelier-chart/atelier-chart.component';
import {AtelierInfoComponent} from '../atelier-info/atelier-info.component';


@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NbSpinnerModule,
    NgxEchartsModule,
    AuthModule,
    NbAlertModule,
    NbInputModule,
    NbPopoverModule,
    NbTooltipModule,
    NbAccordionModule,
    GoogleChartsModule,
    NumberCardModule,
    DashboardRoutingModule,
  ], declarations: [
    AtelierChartComponent,
    AtelierInfoComponent,
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    StatusCardPlaceholderComponent,
    TeamComponent,
  ],

})
export class DashboardModule { }
