import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RoutingRoutingModule } from "./routing-routing.module";
import { RoutingComponent } from "./routing.component";
import { MailModule } from "./mail/mail.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [RoutingComponent],
  imports: [CommonModule, RoutingRoutingModule, MailModule, AuthModule],
})
export class RoutingModule {}
