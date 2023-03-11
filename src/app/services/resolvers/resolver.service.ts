import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IUser } from 'src/app/components/resolver-guard/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any>{

  jsonPlaceholderApi: string;
  usersEndpoint: string;

  constructor(
    private readonly http: HttpClient
  ) {
    this.jsonPlaceholderApi = 'https://jsonplaceholder.typicode.com/';
    this.usersEndpoint = 'users';
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get<IUser[]>(`${this.jsonPlaceholderApi}${this.usersEndpoint}`);
  }

  getUsers() {
    // return this.http.get(`${this.jsonPlaceholderApi}${this.usersEndpoint}`);
  }
}
