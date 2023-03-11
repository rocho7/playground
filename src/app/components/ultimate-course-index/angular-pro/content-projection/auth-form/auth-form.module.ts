import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthFormComponent } from "./auth-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthMessageModule } from "../auth-message/auth-message.module";

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, AuthMessageModule, FormsModule, ReactiveFormsModule],
  exports: [AuthFormComponent],
})
export class AuthFormModule {}
