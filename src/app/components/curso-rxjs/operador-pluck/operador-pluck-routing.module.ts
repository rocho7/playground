import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperadorPluckComponent } from './operador-pluck.component';

const routes: Routes = [
  {
    path: '',
    component: OperadorPluckComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperadorPluckRoutingModule { }
