import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRxjsRoutingModule } from './curso-rxjs-routing.module';
import { CursoRxjsComponent } from './curso-rxjs.component';
import { EjercicioRxjsModule } from './ejercicio-rxjs/ejercicio-rxjs.module';
import { SubjectModule } from './subject/subject.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { OperadorPluckModule } from './operador-pluck/operador-pluck.module';
import { OperatorsTimeComponent } from './operators-time/operators-time.component';
import { OperatorsTransformationComponent } from './operators-transformation/operators-transformation.component';
import { OperatorsYMetodosCombinacionObservablesModule } from './operators-ymetodos-combinacion-observables/operators-ymetodos-combinacion-observables.module';


@NgModule({
  declarations: [CursoRxjsComponent, OperatorsTimeComponent, OperatorsTransformationComponent],
  imports: [
    CommonModule,
    SubjectModule,
    EjercicioRxjsModule,
    SubscriptionModule,
    OperadorPluckModule,
    CursoRxjsRoutingModule,
    OperatorsYMetodosCombinacionObservablesModule
  ],
  exports: [CursoRxjsRoutingModule]
})
export class CursoRxjsModule { }
