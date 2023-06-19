import { ModuleWithProviders, NgModule, Provider } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FOOD_STORE_CONFIG } from "./config";
import { FoodStoreService } from "./food-store.service";

export const FOOD_PROVIDERS: Provider[] = [FoodStoreService];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class FoodStoreModule {
  static forRoot(config: FoodStoreModule): ModuleWithProviders<any> {
    return {
      ngModule: FoodStoreModule,
      providers: [
        FOOD_PROVIDERS,
        {
          provide: FOOD_STORE_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
