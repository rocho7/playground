import { HttpClient, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { FoodStoreConfig, FOOD_STORE_CONFIG } from "./config";

interface IStore {
  storeId: number;
  storeToken: string;
  location: string;
}

@Injectable({
  providedIn: "root",
})
export class FoodStoreService {
  constructor(
    private readonly http: HttpClient,
    @Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig
  ) {}

  async getStore() {
    console.log(
      "%ccheck configuration ",
      "color: red; display: block; width: 100%;",
      this.config?.storeId,
      this.config?.storeToken
    );
    const url =
      "/assets/ultimate-course/angular-pro/dependency-injection/store.json";
    const response = await this.http
      .get<IStore[]>(url)
      .pipe(
        map((res: IStore[]) => {
          return res.filter(
            (it: IStore) => it?.storeId === this.config?.storeId
          );
        })
      )
      .toPromise();
    return response;
  }
}
