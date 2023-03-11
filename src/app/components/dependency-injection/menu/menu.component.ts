import { Component, Inject, OnInit, Optional, Self } from '@angular/core';
import { IUser } from 'src/app/core/tokens/interface/user.interface';
import { THEME_PROOF, USER_REQUEST } from 'src/app/core/tokens/user-request.injection-token';
import { LoggerService } from './resolution-modifiers/logger.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [LoggerService]
})
export class MenuComponent implements OnInit {

  constructor(@Self() private readonly loggerService: LoggerService,
  @Inject(USER_REQUEST) public users: Promise<IUser[]>,
  @Inject(THEME_PROOF) public theme: any) {
    console.clear()
    if ( this.loggerService ) {
      this.loggerService.log('constructor init')
    }

    console.log('%ctheme ', 'background: green; color: white; display: block;', this.theme);
   }

  ngOnInit(): void {
  }

}
