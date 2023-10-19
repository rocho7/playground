import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypescriptBasicRoutingModule } from './typescript-basic-routing.module';
import { TypescriptBasicComponent } from './typescript-basic.component';
import { UnderstandingThisComponent } from './understanding-this/understanding-this.component';


@NgModule({
  declarations: [TypescriptBasicComponent, UnderstandingThisComponent],
  imports: [
    CommonModule,
    TypescriptBasicRoutingModule
  ]
})
export class TypescriptBasicModule { }
