import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';
import { FormsModule } from '@angular/forms';
import { DataListComponentModule } from '../base/ui/data-list/data-list.component';
import { SearchBarComponentModule } from '../base/ui/search-bar/search-bar.component';
import { ProductListModule } from '../product-list/product-list.module';
import { ProductListComponent } from '../product-list/product-list.component';


@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductListModule,
    EmployeeListRoutingModule,
    DataListComponentModule,
    SearchBarComponentModule,
  ]
})
export class EmployeeListModule { }
