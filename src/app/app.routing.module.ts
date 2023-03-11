import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryListComponent } from "./category/category-list/category-list.component";
import { ParentChildRoutingModule } from "./components/parent-child/parent-child-routing.module";
import { PruebasTestingComponent } from "./pruebas-testing/pruebas-testing.component";

const routes: Routes = [
  // {
  //   path: "",
  //   loadChildren: () =>
  //     import("./components/curso-rxjs/curso-rxjs.module").then(
  //       (m) => m.CursoRxjsModule
  //     ),
  // },
  // {
  //   path: "resolver-guard",
  //   loadChildren: () =>
  //     import("./components/resolver-guard/resolver-guard.module").then(
  //       (m) => m.ResolverGuardModule
  //     ),
  // },
  // {
  //   path: "observables",
  //   loadChildren: () =>
  //     import("./components/observables/observables.module").then(
  //       (m) => m.ObservablesModule
  //     ),
  // },
  // {
  //   path: "operador-pluck",
  //   loadChildren: () =>
  //     import(
  //       "./components/curso-rxjs/operador-pluck/operador-pluck.module"
  //     ).then((m) => m.OperadorPluckModule),
  // },
  // {
  //   path: "ejercicio-rxjs",
  //   // loadChildren: () => import('./components/curso-rxjs/ejercicio-rxjs/ejercicio-rxjs.module').then( m => m.EjercicioRxjsModule )
  //   loadChildren: () =>
  //     import("./components/curso-rxjs/curso-rxjs.module").then(
  //       (m) => m.CursoRxjsModule
  //     ),
  // },
  // {
  //   path: "decorator",
  //   loadChildren: () =>
  //     import("./components/creando-decoradors/creando-decoradors.module").then(
  //       (m) => m.CreandoDecoradorsModule
  //     ),
  // },
  // {
  //   path: "strategy-pattern",
  //   loadChildren: () =>
  //     import("./components/design-pattern/design-pattern.module").then(
  //       (m) => m.DesignPatternModule
  //     ),
  // },
  // {
  //   path: "view-child",
  //   loadChildren: () =>
  //     import("./view-child/view-child.module").then((m) => m.ViewChildModule),
  // },
  // {
  //   path: "classes-course",
  //   loadChildren: () =>
  //     import("./components/classes-course/classes-course.module").then(
  //       (m) => m.ClassesCourseModule
  //     ),
  // },
  // {
  //   path: "utility-types",
  //   loadChildren: () =>
  //     import("./components/utility-types/utility-types.module").then(
  //       (m) => m.UtilityTypesModule
  //     ),
  // },
  // {
  //   path: "form-endpoint",
  //   loadChildren: () =>
  //     import("./components/form-endpoint/form-endpoint.module").then(
  //       (m) => m.FormEndpointModule
  //     ),
  // },
  // {
  //   path: "value-control-accessor",
  //   loadChildren: () =>
  //     import(
  //       "./components/control-value-accessor/control-value-accessor.module"
  //     ).then((m) => m.ControlValueAccessorModule),
  // },
  // {
  //   path: "wiget-wrapper",
  //   loadChildren: () =>
  //     import("./components/design-patterns/home/home.module").then(
  //       (m) => m.HomeModule
  //     ),
  // },
  // {
  //   path: "dependency-injection",
  //   loadChildren: () =>
  //     import(
  //       "./components/dependency-injection/dependency-injection.module"
  //     ).then((m) => m.DependencyInjectionModule),
  // },
  // {
  //   path: "composition",
  //   loadChildren: () =>
  //     import("./components/composition/composition.module").then(
  //       (m) => m.CompositionModule
  //     ),
  // },
  // {
  //   path: "categories",
  //   component: CategoryListComponent,
  // },
  // {
  //   path: "testing-jasmine",
  //   component: PruebasTestingComponent,
  // },
  // {
  //   path: "directive-lifecycle",
  //   loadChildren: () =>
  //     import("./components/parent-child/parent-child.module").then(
  //       (m) => m.ParentChildModule
  //     ),
  // },
  {
    path: "playground",
    loadChildren: () =>
      import("./components/playground-index/playground-index.module").then(
        (m) => m.PlaygroundIndexModule
      ),
  },
  {
    path: "ultimate",
    loadChildren: () =>
      import(
        "./components/ultimate-course-index/ultimate-course-index.module"
      ).then((m) => m.UltimateCourseIndexModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
