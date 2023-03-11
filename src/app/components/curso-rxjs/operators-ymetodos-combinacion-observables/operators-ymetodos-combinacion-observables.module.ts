import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperatorsYMetodosCombinacionObservablesComponent } from './operators-ymetodos-combinacion-observables.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [OperatorsYMetodosCombinacionObservablesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [OperatorsYMetodosCombinacionObservablesComponent]
})
export class OperatorsYMetodosCombinacionObservablesModule { }
