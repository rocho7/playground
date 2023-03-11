import { Component, Inject, OnInit, Optional } from '@angular/core';
import { IUser } from 'src/app/core/tokens/interface/user.interface';
import { USER_REQUEST } from 'src/app/core/tokens/user-request.injection-token';

@Component({
  selector: 'app-injection-token',
  templateUrl: './injection-token.component.html',
  styleUrls: ['./injection-token.component.css']
})
export class InjectionTokenComponent implements OnInit {

  constructor(@Inject(USER_REQUEST) public users: Promise<IUser[]>) { }

   ngOnInit() {
    console.log('%cusers ', 'color: white; background-color: #007acc;',  this.users);
  }

}
