import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgRdxComponent } from "./ng-rdx.component";

const routes: Routes = [
  {
    path: "",
    component: NgRdxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgRdxRoutingModule {}
