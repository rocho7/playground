import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { ViewChildComponent } from './view-child.component';

const routes: Routes = [
  {
    path: '',
    component: ViewChildComponent,
    children: [
      {
        path: 'hijo',
        component: HijoComponent
      },
      {
        path: 'hijo2',
        component: Hijo2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChildRoutingModule { }
