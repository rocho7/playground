import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InjectionTokenComponent } from './injection-token.component';

const routes: Routes = [
  {
    path: '',
    component: InjectionTokenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InjectionTokenRoutingModule { }
