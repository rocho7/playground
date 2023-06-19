import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { FOOD_API_TOKEN } from "./token";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  constructor(
    private readonly http: HttpClient,
    @Inject(FOOD_API_TOKEN) private foodApiPath: string
  ) {}

  getFood() {
    return this.http.get(`${this.foodApiPath}food.json`);
  }
  getDrinks() {
    return this.http.get(`${this.foodApiPath}drinks.json`);
  }
  getSides() {
    return this.http.get(`${this.foodApiPath}sides.json`);
  }
}
