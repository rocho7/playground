import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEndpointComponent } from './form-endpoint.component';

const routes: Routes = [
  {
    path: '',
    component: FormEndpointComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormEndpointRoutingModule { }
