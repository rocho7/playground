import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { Subject } from 'rxjs';
import { IUser } from 'src/app/core/tokens/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private theme = new Subject<string>();
  theme$ = this.theme.asObservable();

  constructor(private http: HttpClient) { }

   async getUsersRequest(): Promise<IUser[]> {
    return await this.http.get('https://jsonplaceholder.typicode.com/users').toPromise() as IUser[];
  }

  setTheme(theme: string) {
    this.theme.next(theme)
  }
}
