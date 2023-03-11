import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjercicioRxjsComponent } from './ejercicio-rxjs.component';


@NgModule({
  declarations: [EjercicioRxjsComponent],
  imports: [
    CommonModule,
  ], exports: [EjercicioRxjsComponent]
})
export class EjercicioRxjsModule { }
