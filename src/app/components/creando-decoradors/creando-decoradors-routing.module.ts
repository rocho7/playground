import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreandoDecoradorsComponent } from './creando-decoradors.component';

const routes: Routes = [
  {
    path: 'decorator',
    component: CreandoDecoradorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreandoDecoradorsRoutingModule { }
