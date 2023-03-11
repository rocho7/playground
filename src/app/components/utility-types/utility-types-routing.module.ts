import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilityTypesComponent } from './utility-types.component';

const routes: Routes = [
  {
    path: '',
    component: UtilityTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityTypesRoutingModule { }
