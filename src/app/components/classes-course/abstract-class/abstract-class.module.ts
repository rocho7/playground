import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractClassComponent } from './abstract-class.component';



@NgModule({
  declarations: [AbstractClassComponent],
  imports: [
    CommonModule,
  ],
  exports: [AbstractClassComponent]
})
export class AbstractClassModule { }
