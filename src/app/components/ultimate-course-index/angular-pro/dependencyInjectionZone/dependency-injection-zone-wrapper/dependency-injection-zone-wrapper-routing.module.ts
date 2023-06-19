import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DependencyInjectionZoneWrapperComponent } from "./dependency-injection-zone-wrapper.component";

const routes: Routes = [
  {
    path: "",
    component: DependencyInjectionZoneWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependencyInjectionZoneWrapperRoutingModule {}
