import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { Product } from "../../containers/stock-inventory/models/products.interface";

@Component({
  selector: "app-stock-products",
  templateUrl: "./stock-products.component.html",
  styleUrls: ["./stock-products.component.sass"],
})
export class StockProductsComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() map: Map<number, Product>;
  @Output() removed = new EventEmitter<any>();
  get stocks() {
    return (this.parent.get("stock") as FormArray).controls;
  }
  constructor() {}

  ngOnInit(): void {}

  getProducts(id: number) {
    return this.map.get(id);
  }

  removeItem(i: number): void {
    this.removed.emit(i);
  }
}
