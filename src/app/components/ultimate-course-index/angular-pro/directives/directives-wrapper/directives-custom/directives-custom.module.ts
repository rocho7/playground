import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DirectivesCustomComponent } from "./directives-custom.component";
import { CreditCardDirective } from './credit-card.directive';
import { TooltipDirective } from './tooltip.directive';
import { MyForDirective } from './my-for.directive';

@NgModule({
  declarations: [DirectivesCustomComponent, CreditCardDirective, TooltipDirective, MyForDirective],
  imports: [CommonModule],
  exports: [DirectivesCustomComponent],
})
export class DirectivesCustomModule {}
