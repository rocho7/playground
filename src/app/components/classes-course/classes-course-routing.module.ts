import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesCourseComponent } from './classes-course.component';

const routes: Routes = [ {
  path: '',
  component: ClassesCourseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesCourseRoutingModule { }
