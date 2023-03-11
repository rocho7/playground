import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentProjectionRoutingModule } from "./content-projection-routing.module";
import { ContentProjectionComponent } from "./content-projection.component";
import { AuthFormModule } from "./auth-form/auth-form.module";
import { MatButtonModule } from "@angular/material/button";
import { AuthRememberComponent } from "./auth-remember/auth-remember.component";
import { ShadowDomEncapsulationComponent } from "./encapsulation/shadow-dom-encapsulation.component";
import { EmulatedEncapsulationComponent } from "./encapsulation/emulated-encapsulation.component";
import { NoEncapsulationComponent } from "./encapsulation/no-encapsulation.component";
import { DefaultChangeDetectionComponent } from "./change-detection/default.component";
import { OnPushDetectionComponent } from "./change-detection/on-push.component";

@NgModule({
  declarations: [
    ContentProjectionComponent,
    AuthRememberComponent,
    ShadowDomEncapsulationComponent,
    EmulatedEncapsulationComponent,
    NoEncapsulationComponent,
    DefaultChangeDetectionComponent,
    OnPushDetectionComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AuthFormModule,
    ContentProjectionRoutingModule,
  ],
})
export class ContentProjectionModule {}
