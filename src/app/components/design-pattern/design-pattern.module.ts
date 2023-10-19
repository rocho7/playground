import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DesignPatternRoutingModule } from "./design-pattern-routing.module";
import { DesignPatternComponent } from "./design-pattern.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
@NgModule({
  declarations: [DesignPatternComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    DesignPatternRoutingModule,
  ],
})
export class DesignPatternModule {}
