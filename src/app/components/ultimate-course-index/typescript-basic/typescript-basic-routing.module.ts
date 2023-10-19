import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TypescriptBasicComponent } from "./typescript-basic.component";

const routes: Routes = [
  {
    path: "",
    component: TypescriptBasicComponent,
    children: [
      {
        path: "understanding-this",
        loadChildren: () =>
          import("./understanding-this/understanding-this.module").then(
            (m) => m.UnderstandingThisModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypescriptBasicRoutingModule {}
