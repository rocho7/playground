import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridWrapperComponent } from './data-grid-wrapper.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

import { DataGridModule } from './components/data-grid/data-grid.module';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    DataGridWrapperComponent,
    ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    DataGridModule
  ],
  exports: [
    DataGridWrapperComponent,
    DataGridComponent,
    BreadcrumbComponent]
})
export class DataGridWrapperModule { }
