import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DependencyInjectionZoneWrapperRoutingModule } from "./dependency-injection-zone-wrapper-routing.module";
import { FoodViewerComponent } from "./containers/food-viewer/food-viewer.component";
import { DependencyInjectionZoneWrapperComponent } from "./dependency-injection-zone-wrapper.component";
import { DrinksViewerComponent } from "./containers/drinks-viewer/drinks-viewer.component";
import { FoodStoreModule } from "../food-store/food-store.module";

@NgModule({
  declarations: [
    DependencyInjectionZoneWrapperComponent,
    FoodViewerComponent,
    DrinksViewerComponent,
  ],
  imports: [
    CommonModule,
    FoodStoreModule.forRoot({
      storeId: 10292,
      storeToken: "123abc",
    }),
    DependencyInjectionZoneWrapperRoutingModule,
  ],
  // providers: [
  //   {
  //     provide: "foodApiPath",
  //     useValue:
  //       "/assets/ultimate-course/angular-pro/dependency-injection/food.json",
  //   },
  // ],
})
export class DependencyInjectionZoneWrapperModule {}
