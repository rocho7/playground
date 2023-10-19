import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UnderstandingThisComponent } from "./understanding-this.component";

const routes: Routes = [
  {
    path: "",
    component: UnderstandingThisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderstandingThisRoutingModule {}
