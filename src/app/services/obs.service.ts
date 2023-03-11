import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { IUser } from "../components/resolver-guard/interface/user.interface";

@Injectable({
  providedIn: "root",
})
export class ObsService {
  name$ = new BehaviorSubject<string>("");
  subject$ = new Subject<number>();
  dataFromUrl$ = new Subject<any>();

  constructor(public http: HttpClient) {}

  public getGithub(url: string): any {
    const gh = ajax.getJSON(
      "https://jsonplaceholder.typicode.com/photos/" + url
    );

    const data$ = new Observable((observer) => {
      gh.subscribe(
        (result) => {
          observer.next(result);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
    return data$;
  }

  getResult(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/photos/" + id);
  }

  getResults() {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/photos");
  }
  getResultsWithRxjs() {
    this.http
      .get("https://jsonplaceholder.typicode.com/photos")
      .subscribe((result) => {
        this.dataFromUrl$.next(result);
      });
  }

  setData(data: string) {
    this.name$.next(data);
    this.subject$.next(1);
    this.subject$.next(2);
  }

  save(payload: any): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      "content-type": "application/json",
      "access-control-allow-origin": "*",
      vary: "Accept-Encoding",
    });
    let options = { headers: headers };
    // https://beeceptor.com/console/testingservice
    // const beeceptorApi = 'https://testingservice.free.beeceptor.com/';
    // const postEndpoint = 'post';
    const mockApi = "https://63525dd8a9f3f34c373bb1ce.mockapi.io/api/";
    const postEndpoint = "users";
    return this.http.post<any>(`${mockApi}${postEndpoint}`, payload, options);
  }

  remove() {}
}
