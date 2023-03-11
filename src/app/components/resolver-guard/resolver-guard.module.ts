import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolverGuardComponent } from './resolver-guard.component';
import { ResolverGuardRoutingModule } from './resolver-guard-routing.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [ResolverGuardComponent],
  imports: [
    CommonModule,
    CoreModule,
    ResolverGuardRoutingModule
  ]
})
export class ResolverGuardModule { }
