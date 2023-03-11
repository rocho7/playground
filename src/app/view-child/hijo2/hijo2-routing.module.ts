import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Hijo2Component } from './hijo2.component';

const routes: Routes = [
  {
    path: '',
    component: Hijo2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hijo2RoutingModule { }
