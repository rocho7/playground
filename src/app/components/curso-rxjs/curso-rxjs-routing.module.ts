import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoRxjsComponent } from './curso-rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: CursoRxjsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRxjsRoutingModule { }
