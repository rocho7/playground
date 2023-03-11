import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormWrapperRoutingModule } from "./form-wrapper-routing.module";
import { FormWrapperComponent } from "./form-wrapper.component";
import { StockInventoryModule } from "./containers/stock-inventory/stock-inventory.module";

@NgModule({
  declarations: [FormWrapperComponent],
  imports: [CommonModule, StockInventoryModule, FormWrapperRoutingModule],
})
export class FormWrapperModule {}
