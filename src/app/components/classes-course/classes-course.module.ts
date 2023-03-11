import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesCourseRoutingModule } from './classes-course-routing.module';
import { Parent } from './parentClass/Parent';
import { AbstractClassComponent } from './abstract-class/abstract-class.component';
import { AbstractClassModule } from './abstract-class/abstract-class.module';
import { ClassesCourseComponent } from './classes-course.component';

@NgModule({
  declarations: [ClassesCourseComponent],
  imports: [
    CommonModule,
    AbstractClassModule,
    ClassesCourseRoutingModule,
  ],
  // exports: [ClassesCourseComponent]
})
export class ClassesCourseModule { }
