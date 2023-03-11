import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { StockService } from "../../../services/stock.service";
import { Product } from "./models/products.interface";
import { StockValidators } from "./validations/stock-inventory.validations";

@Component({
  selector: "app-stock-inventory",
  templateUrl: "./stock-inventory.component.html",
  styleUrls: ["./stock-inventory.component.sass"],
})
export class StockInventoryComponent implements OnInit {
  form: FormGroup;
  products: Array<Product> = [];
  responseApi: any;
  productMap: Map<number, Product>;
  total: number;
  constructor(
    private readonly fb: FormBuilder,
    private readonly stockService: StockService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getApiCall();
  }

  async getApiCall() {
    this.responseApi = await this.stockService.get();
    if (this.responseApi) {
      this.products = this.responseApi.products;
      const myMap = this.responseApi.products.map((p: Product) => [p.id, p]);
      this.productMap = new Map<number, Product>(myMap);
      console.log(
        "%cmyMap ",
        "color: white; background-color: #007acc;",
        this.productMap
      );
      if (this.responseApi.carts) {
        this.responseApi.carts.forEach((cart: any) => {
          this.onProductAdded(cart);
        });
      }

      this.getTotal(this.form.get("stock")?.value);

      this.form.get("stock")?.valueChanges.subscribe((value) => {
        console.log(
          "%cvaluechanges ",
          "background: green; color: white; display: block;",
          value
        );
        this.getTotal(value);
      });
    }
  }

  createForm(): void {
    this.form = this.fb.group(
      {
        store: this.fb.group({
          branch: ["", [Validators.required, StockValidators.checkBranch]],
          code: ["", Validators.required],
        }),
        selector: this.createStock({}),
        stock: this.fb.array([]),
      }
      // { validator: StockValidators.checkStockExists }
    );
  }

  getTotal(value: any): void {
    this.total = value.reduce((prev: any, curr: any) => {
      const currentPrice = this.productMap.get(curr?.product_id)?.price;
      return prev + curr.quantity * currentPrice!;
    }, 0);
  }

  createStock(stock: any) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || "",
      quantity: stock.quantity || 10,
    });
  }

  getStock(): FormArray {
    return this.form.get("stock") as FormArray;
  }

  onProductAdded(product: any): void {
    const control = this.getStock();
    control.push(this.createStock(product));
  }

  onProductRemoved(index: number): void {
    const control = this.getStock();
    control.removeAt(index);
  }

  submit(): void {
    console.log(
      "%csubmit ",
      "color: white; background-color: #007acc;",
      this.form.value
    );
  }
}
