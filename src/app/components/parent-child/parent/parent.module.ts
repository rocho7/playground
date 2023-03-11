import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { childModule } from '../child/child.module';



@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    childModule
  ]
})
export class ParentModule { }
