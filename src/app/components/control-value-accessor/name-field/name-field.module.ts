import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFieldComponent } from './name-field.component';



@NgModule({
  declarations: [NameFieldComponent],
  imports: [
    CommonModule
  ],
  exports: [NameFieldComponent]
})
export class NameFieldModule { }
