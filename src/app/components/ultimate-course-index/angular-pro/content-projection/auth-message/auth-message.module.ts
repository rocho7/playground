import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthMessageComponent } from "./auth-message.component";

@NgModule({
  declarations: [AuthMessageComponent],
  imports: [CommonModule],
  exports: [AuthMessageComponent],
})
export class AuthMessageModule {}
