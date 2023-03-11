import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UltimateCourseIndexComponent } from "./ultimate-course-index.component";

const routes: Routes = [
  {
    path: "",
    component: UltimateCourseIndexComponent,
  },
  {
    path: "angular-pro",
    loadChildren: () =>
      import("./angular-pro/angular-pro.module").then(
        (m) => m.AngularProModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UltimateCourseIndexRoutingModule {}
