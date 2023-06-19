import { Component, OnInit } from "@angular/core";
import { FoodStoreService } from "../food-store/food-store.service";

@Component({
  selector: "app-dependency-injection-zone-wrapper",
  templateUrl: "./dependency-injection-zone-wrapper.component.html",
  styleUrls: ["./dependency-injection-zone-wrapper.component.css"],
})
export class DependencyInjectionZoneWrapperComponent implements OnInit {
  store: any;
  constructor(private readonly foodService: FoodStoreService) {}

  ngOnInit(): void {
    this.foodService.getStore().then((res) => {
      this.store = res[0];
    });
  }
}
