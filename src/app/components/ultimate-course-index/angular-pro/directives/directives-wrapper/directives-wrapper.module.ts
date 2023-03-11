import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DirectivesWrapperRoutingModule } from "./directives-wrapper-routing.module";
import { DirectivesWrapperComponent } from "./directives-wrapper.component";
import { DirectivesCustomModule } from "./directives-custom/directives-custom.module";
import { PipesCustomComponent } from "./pipes-custom/pipes-custom.component";
import { FileSizePipe } from "./pipes-custom/pipes/file-size.pipe";

@NgModule({
  declarations: [
    DirectivesWrapperComponent,
    PipesCustomComponent,
    FileSizePipe,
  ],
  imports: [
    CommonModule,
    DirectivesCustomModule,
    DirectivesWrapperRoutingModule,
  ],
  exports: [DirectivesWrapperComponent],
})
export class DirectivesWrapperModule {}
