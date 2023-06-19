import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TypescriptBasicComponent } from "./typescript-basic.component";

const routes: Routes = [
  {
    path: "",
    component: TypescriptBasicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypescriptBasicRoutingModule {}
