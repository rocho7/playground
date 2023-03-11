import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DependencyProvidersComponent } from './dependency-providers.component';

const routes: Routes = [
  {
    path: '',
    component: DependencyProvidersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependencyProvidersRoutingModule { }
