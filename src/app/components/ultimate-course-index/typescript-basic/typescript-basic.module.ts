import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypescriptBasicRoutingModule } from './typescript-basic-routing.module';
import { TypescriptBasicComponent } from './typescript-basic.component';


@NgModule({
  declarations: [TypescriptBasicComponent],
  imports: [
    CommonModule,
    TypescriptBasicRoutingModule
  ]
})
export class TypescriptBasicModule { }
