import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignPatternComponent } from './design-pattern.component';

const routes: Routes = [
  {
    path: '',
    component: DesignPatternComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignPatternRoutingModule { }
