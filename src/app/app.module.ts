import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PruebasTestingComponent } from "./pruebas-testing/pruebas-testing.component";
import { ViewChildComponent } from "./view-child/view-child.component";
import { HijoComponent } from "./view-child/hijo/hijo.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { DxButtonModule } from "devextreme-angular";
import { ComponentePruebaComponent } from "./components/componente-prueba/componente-prueba.component";
import { ComponentePrueba2Component } from "./components/componente-prueba2/componente-prueba2.component";
import { RouteComponent } from "./components/command-cli/route/route.component";
import { AppRoutingModule } from "./app.routing.module";
import { RouterModule } from "@angular/router";
import { MyConfigServiceModule } from "./components/my-config-service/my-config-service.module";
import { CreandoDecoradorsModule } from "./components/creando-decoradors/creando-decoradors.module";
import { ClassesCourseModule } from "./components/classes-course/classes-course.module";
import { environment } from "../environments/environment";
import { ApiModule } from "../app/services/swagger-apis/products.services/api.module";
import { BASE_PATH } from "../app/services/swagger-apis/products.services/variables";

import { CdkAccordionModule } from "@angular/cdk/accordion";
import { DependencyInjectionModule } from "./components/dependency-injection/dependency-injection.module";
import { CoreModule } from "./core/core.module";
import { CategoryModule } from "./category/category.module";
import { SpinnerInterceptorInterceptor } from "./core/interceptors/spinner-interceptor.interceptor";
import { PruebasTestingModule } from "./pruebas-testing/pruebas-testing.module";
import { FOOD_API_TOKEN } from "./components/ultimate-course-index/angular-pro/dependencyInjectionZone/dependency-injection-zone-wrapper/token";

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    HijoComponent,
    ComponentePruebaComponent,
    ComponentePrueba2Component,
    RouteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    DxButtonModule,
    BrowserAnimationsModule,
    CreandoDecoradorsModule,
    ClassesCourseModule,
    ApiModule,
    AppRoutingModule,
    RouterModule,
    // childModule,
    // DependencyInjectionModule,
    MyConfigServiceModule.forRoot("***appRoot***"),
    CoreModule,
    CategoryModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorInterceptor,
      multi: true,
    },
    {
      provide: BASE_PATH,
      useValue: environment.API_BASE_PATH,
    },
    // {
    //   provide: USER_REQUEST,
    //   useFactory: getUser,
    //   deps: [UserService]
    // }
    {
      provide: FOOD_API_TOKEN,
      useValue: "/assets/ultimate-course/angular-pro/dependency-injection/",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
