import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { DataListComponentModule } from '../base/ui/data-list/data-list.component';
import { SearchBarComponentModule } from '../base/ui/search-bar/search-bar.component';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    // ProductListRoutingModule,
    DataListComponentModule,
    SearchBarComponentModule,
  ],
  exports: [ProductListComponent]
})
export class ProductListModule { }
