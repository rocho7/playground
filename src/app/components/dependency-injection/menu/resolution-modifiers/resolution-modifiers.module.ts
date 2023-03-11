import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolutionModifiersRoutingModule } from './resolution-modifiers-routing.module';
import { ResolutionModifiersComponent } from './resolution-modifiers.component';


@NgModule({
  declarations: [ResolutionModifiersComponent],
  imports: [
    CommonModule,
    ResolutionModifiersRoutingModule
  ]
})
export class ResolutionModifiersModule { }
