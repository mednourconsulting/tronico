import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdonanceComponent} from './ordonance.component';
import {EvolutionheuresComponent} from './evolutionheures/evolutionheures.component';
import {SpleetEcartOfComponent} from './spleet-ecart-of/spleet-ecart-of.component';


const routes: Routes = [{
  path: '',
  component: OrdonanceComponent,
  children: [{
    path: 'evolutionheures',
    component: EvolutionheuresComponent,
  }, {
    path: 'spleetecartof',
    component: SpleetEcartOfComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdonanceRoutingModule {
}
