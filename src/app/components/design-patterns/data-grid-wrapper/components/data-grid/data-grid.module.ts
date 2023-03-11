import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';
import { DataGridComponent } from './data-grid.component';



@NgModule({
  declarations: [DataGridComponent],
  imports: [
    CommonModule,
    DxDataGridModule
  ],
  exports: [DataGridComponent]
})
export class DataGridModule { }
