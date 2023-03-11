import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyProvidersRoutingModule } from './dependency-providers-routing.module';
import { DependencyProvidersComponent } from './dependency-providers.component';
import { UseClassComponent } from './useClassExample/use-class/use-class.component';
import { UseFactoryComponent } from './useFactoryExample/use-factory/use-factory.component';


@NgModule({
  declarations: [DependencyProvidersComponent, UseClassComponent, UseFactoryComponent],
  imports: [
    CommonModule,
    DependencyProvidersRoutingModule
  ]
})
export class DependencyProvidersModule { }
