import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from './interface/user.interface';

@Component({
  selector: 'app-resolver-guard',
  templateUrl: './resolver-guard.component.html',
  styleUrls: ['./resolver-guard.component.css']
})
export class ResolverGuardComponent implements OnInit {

  users: IUser[];
  userSelected: IUser;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient) {
  }

  ngOnInit(): void {
    this.users = this.route.snapshot.data['userParam'];
    this.userSelected = Object.create({});
  }

  selectedUser(user: any): void {
    console.log('%cresolver ', 'color: white; background-color: #007acc;', user );
    this.userSelected = this.users.filter( (u: IUser) => u.id === Number(user.target.value) )[0];
  }

  save(): void {
    const jsonPlaceholderApi = 'https://jsonplaceholder.typicode.com/';
    const usersEndpoint = 'users';
     this.http.post<IUser>(`${jsonPlaceholderApi}${usersEndpoint}`, this.userSelected).subscribe();

  }

}
