import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolutionModifiersComponent } from './resolution-modifiers.component';

const routes: Routes = [
  {
    path: '',
    component: ResolutionModifiersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolutionModifiersRoutingModule { }
