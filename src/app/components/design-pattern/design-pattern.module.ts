import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignPatternRoutingModule } from './design-pattern-routing.module';
import { DesignPatternComponent } from './design-pattern.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DesignPatternComponent],
  imports: [
    CommonModule,
    FormsModule,
    DesignPatternRoutingModule
  ]
})
export class DesignPatternModule { }
