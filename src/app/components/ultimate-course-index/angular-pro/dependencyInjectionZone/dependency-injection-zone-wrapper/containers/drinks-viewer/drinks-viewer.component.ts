import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FoodService } from "../../food.service";

abstract class DrinkService {
  getDrinks: () => any;
}

@Component({
  selector: "app-drinks-viewer",
  templateUrl: "./drinks-viewer.component.html",
  styleUrls: ["./drinks-viewer.component.css"],
  providers: [
    {
      provide: DrinkService,
      useExisting: FoodService,
    },
  ],
})
export class DrinksViewerComponent implements OnInit {
  items: Observable<any>;
  constructor(private readonly foodService: DrinkService) {}

  ngOnInit(): void {
    this.items = this.foodService.getDrinks();
    //   .subscribe((res: any) => (this.items = res?.drinks));
    // console.log(
    //   "%cthis.items ",
    //   "color: red; display: block; width: 100%;",
    //   this.items
    // );
  }
}
