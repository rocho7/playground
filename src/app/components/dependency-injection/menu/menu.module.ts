import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { InjectionTokenComponent } from './injection-token/injection-token.component';


@NgModule({
  declarations: [MenuComponent, InjectionTokenComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
