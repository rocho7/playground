import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlValueAccessorRoutingModule } from './control-value-accessor-routing.module';
import { ControlValueAccessorComponent } from './control-value-accessor.component';
import { NameFieldModule } from './name-field/name-field.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementInputFilterComponent } from './element-input-filter/element-input-filter.component';


@NgModule({
  declarations: [ControlValueAccessorComponent, ElementInputFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NameFieldModule,
    ControlValueAccessorRoutingModule
  ]
})
export class ControlValueAccessorModule { }
