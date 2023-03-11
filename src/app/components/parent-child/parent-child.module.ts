import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildRoutingModule } from './parent-child-routing.module';
import { ParentModule } from './parent/parent.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ParentModule,
    ParentChildRoutingModule
  ]
})
export class ParentChildModule { }
