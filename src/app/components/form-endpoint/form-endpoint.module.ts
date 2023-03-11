import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEndpointRoutingModule } from './form-endpoint-routing.module';
import { FormEndpointComponent } from './form-endpoint.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [FormEndpointComponent],
  imports: [
    CommonModule,
    FormEndpointRoutingModule,
    CoreModule
  ]
})
export class FormEndpointModule { }
