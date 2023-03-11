import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DirectivesWrapperComponent } from "./directives-wrapper.component";

const routes: Routes = [
  {
    path: "",
    component: DirectivesWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivesWrapperRoutingModule {}
