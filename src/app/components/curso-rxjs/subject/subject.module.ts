import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject.component';



@NgModule({
  declarations: [SubjectComponent],
  imports: [
    CommonModule
  ], exports: [SubjectComponent]
})
export class SubjectModule { }
