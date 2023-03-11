import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlaygroundIndexRoutingModule } from "./playground-index-routing.module";
import { PlaygroundIndexComponent } from "./playground-index.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { SpinnerInterceptorInterceptor } from "src/app/core/interceptors/spinner-interceptor.interceptor";

@NgModule({
  declarations: [PlaygroundIndexComponent],
  imports: [CommonModule, PlaygroundIndexRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorInterceptor,
      multi: true,
    },
  ],
})
export class PlaygroundIndexModule {}
