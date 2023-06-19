import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AngularProComponent } from "./angular-pro.component";

const routes: Routes = [
  {
    path: "",
    component: AngularProComponent,
    children: [
      {
        path: "content-projection",
        loadChildren: () =>
          import("./content-projection/content-projection.module").then(
            (m) => m.ContentProjectionModule
          ),
      },
      {
        path: "directives",
        loadChildren: () =>
          import(
            "./directives/directives-wrapper/directives-wrapper.module"
          ).then((m) => m.DirectivesWrapperModule),
      },
      {
        path: "reactive-form",
        loadChildren: () =>
          import("./reactive-form/form-wrapper/form-wrapper.module").then(
            (m) => m.FormWrapperModule
          ),
      },
      {
        path: "routing",
        loadChildren: () =>
          import("./routing/routing.module").then((m) => m.RoutingModule),
      },
      {
        path: "dependencyInjectionZone",
        loadChildren: () =>
          import(
            "./dependencyInjectionZone/dependency-injection-zone-wrapper/dependency-injection-zone-wrapper.module"
          ).then((m) => m.DependencyInjectionZoneWrapperModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularProRoutingModule {}
