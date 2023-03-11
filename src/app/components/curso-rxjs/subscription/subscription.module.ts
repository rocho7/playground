import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';



@NgModule({
  declarations: [SubscriptionComponent],
  imports: [
    CommonModule
  ],
  exports: [SubscriptionComponent]
})
export class SubscriptionModule { }
