import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard1Component } from './dashboard1.component';
import {NbCardModule} from '@nebular/theme';
import {MycomponentsModule} from '../mycomponents/mycomponents.module';
import {OrdonanceModule} from '../ordonance/ordonance.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {Dashboard1RoutingModule} from './dashboard1-routing.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [Dashboard1Component],
    imports: [
        CommonModule,
        NbCardModule,
        MycomponentsModule,
        OrdonanceModule,
        Ng2SmartTableModule,
        Dashboard1RoutingModule,
        FormsModule,
    ],
})
export class Dashboard1Module { }
