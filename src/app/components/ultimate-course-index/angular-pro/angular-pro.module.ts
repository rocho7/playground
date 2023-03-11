import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngularProRoutingModule } from "./angular-pro-routing.module";
import { AngularProComponent } from "./angular-pro.component";

@NgModule({
  declarations: [AngularProComponent],
  imports: [CommonModule, AngularProRoutingModule],
})
export class AngularProModule {}
