import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';

import { NoRepeatMessagePipe } from './directives/no-repeat-message.pipe';
import { DestacarDirective } from 'src/app/destacar.directive';
import { MultiplicarDirective } from 'src/app/multiplicar.directive';



@NgModule({
  declarations: [
    ChildComponent,
    DestacarDirective,
    MultiplicarDirective,
    NoRepeatMessagePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ChildComponent]
})
export class childModule { }
