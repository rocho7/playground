import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjercicioRxjsComponent } from './ejercicio-rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: EjercicioRxjsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjercicioRxjsRoutingModule { }
