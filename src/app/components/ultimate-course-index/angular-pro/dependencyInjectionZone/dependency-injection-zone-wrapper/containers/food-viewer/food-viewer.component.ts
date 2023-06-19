import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FoodService } from "../../food.service";

abstract class PizzaService {
  getFood: () => any;
}

@Component({
  selector: "app-food-viewer",
  templateUrl: "./food-viewer.component.html",
  styleUrls: ["./food-viewer.component.css"],
  providers: [
    {
      provide: PizzaService,
      useExisting: FoodService,
    },
  ],
})
export class FoodViewerComponent implements OnInit {
  items: Observable<any>;

  constructor(private readonly foodService: PizzaService) {}

  ngOnInit(): void {
    this.items = this.foodService.getFood();
  }
}
