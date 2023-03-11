import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryListComponent } from "src/app/category/category-list/category-list.component";
import { PruebasTestingComponent } from "src/app/pruebas-testing/pruebas-testing.component";
import { PlaygroundIndexComponent } from "./playground-index.component";

const routes: Routes = [
  {
    path: "",
    component: PlaygroundIndexComponent,
  },
  {
    path: "",
    loadChildren: () =>
      import("../curso-rxjs/curso-rxjs.module").then((m) => m.CursoRxjsModule),
  },
  {
    path: "resolver-guard",
    loadChildren: () =>
      import("../resolver-guard/resolver-guard.module").then(
        (m) => m.ResolverGuardModule
      ),
  },
  {
    path: "observables",
    loadChildren: () =>
      import("../observables/observables.module").then(
        (m) => m.ObservablesModule
      ),
  },
  {
    path: "operador-pluck",
    loadChildren: () =>
      import("../curso-rxjs/operador-pluck/operador-pluck.module").then(
        (m) => m.OperadorPluckModule
      ),
  },
  {
    path: "ejercicio-rxjs",
    // loadChildren: () => import('../curso-rxjs/ejercicio-rxjs/ejercicio-rxjs.module').then( m => m.EjercicioRxjsModule )
    loadChildren: () =>
      import("../curso-rxjs/curso-rxjs.module").then((m) => m.CursoRxjsModule),
  },
  {
    path: "decorator",
    loadChildren: () =>
      import("../creando-decoradors/creando-decoradors.module").then(
        (m) => m.CreandoDecoradorsModule
      ),
  },
  {
    path: "strategy-pattern",
    loadChildren: () =>
      import("../design-pattern/design-pattern.module").then(
        (m) => m.DesignPatternModule
      ),
  },
  {
    path: "view-child",
    loadChildren: () =>
      import("../../view-child/view-child.module").then(
        (m) => m.ViewChildModule
      ),
  },
  {
    path: "classes-course",
    loadChildren: () =>
      import("../classes-course/classes-course.module").then(
        (m) => m.ClassesCourseModule
      ),
  },
  {
    path: "utility-types",
    loadChildren: () =>
      import("../utility-types/utility-types.module").then(
        (m) => m.UtilityTypesModule
      ),
  },
  {
    path: "form-endpoint",
    loadChildren: () =>
      import("../form-endpoint/form-endpoint.module").then(
        (m) => m.FormEndpointModule
      ),
  },
  {
    path: "value-control-accessor",
    loadChildren: () =>
      import("../control-value-accessor/control-value-accessor.module").then(
        (m) => m.ControlValueAccessorModule
      ),
  },
  {
    path: "wiget-wrapper",
    loadChildren: () =>
      import("../design-patterns/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "dependency-injection",
    loadChildren: () =>
      import("../dependency-injection/dependency-injection.module").then(
        (m) => m.DependencyInjectionModule
      ),
  },
  {
    path: "composition",
    loadChildren: () =>
      import("../composition/composition.module").then(
        (m) => m.CompositionModule
      ),
  },
  {
    path: "categories",
    component: CategoryListComponent,
  },
  {
    path: "testing-jasmine",
    component: PruebasTestingComponent,
  },
  {
    path: "directive-lifecycle",
    loadChildren: () =>
      import("../parent-child/parent-child.module").then(
        (m) => m.ParentChildModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundIndexRoutingModule {}
