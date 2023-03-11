import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompositionRoutingModule } from './composition-routing.module';
import { EmployeeListModule } from './employee-list/employee-list.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeeListModule,
    CompositionRoutingModule
  ]
})
export class CompositionModule { }
