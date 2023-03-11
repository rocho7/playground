import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StockBranchComponent } from "../../components/stock-branch/stock-branch.component";
import { StockProductsComponent } from "../../components/stock-products/stock-products.component";
import { StockSelectorComponent } from "../../components/stock-selector/stock-selector.component";
import { StockInventoryComponent } from "./stock-inventory.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ShowInfoProductDirective } from "../../../directives/show-info-product.directive";
import { StockCounterComponent } from "../../components/stock-counter/stock-counter.component";

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockSelectorComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockCounterComponent,
    ShowInfoProductDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [StockInventoryComponent],
})
export class StockInventoryModule {}
