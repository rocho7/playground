import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StockService {
  constructor(private readonly http: HttpClient) {}

  async get() {
    const url = "/assets/ultimate-course/angular-pro/data.json";
    const response = await this.http.get(url).toPromise();
    return response;
  }

  // checkBranchId(id: string): Observable<boolean> {
  //   let search = new URLSearchParams();
  //   search.set("id", id);
  //   // return this.http.get()
  //   return of(true);
  // }
}
