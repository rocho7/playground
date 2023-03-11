import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HijoComponent } from './hijo.component';

const routes: Routes = [
  {
    path: 'hijo',
    component: HijoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HijoRoutingModule { }
