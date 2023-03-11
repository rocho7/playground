import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyInjectionRoutingModule } from './dependency-injection-routing.module';
import { MenuModule } from './menu/menu.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    DependencyInjectionRoutingModule
  ]
})
export class DependencyInjectionModule { }
