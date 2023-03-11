import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PruebasTestingComponent } from './pruebas-testing.component';



@NgModule({
  declarations: [PruebasTestingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PruebasTestingModule { }
