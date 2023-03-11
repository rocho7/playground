import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperadorPluckRoutingModule } from './operador-pluck-routing.module';
import { OperadorPluckComponent } from './operador-pluck.component';


@NgModule({
  declarations: [OperadorPluckComponent],
  imports: [
    CommonModule,
    // OperadorPluckRoutingModule
  ],
  exports: [OperadorPluckComponent]
})
export class OperadorPluckModule { }
