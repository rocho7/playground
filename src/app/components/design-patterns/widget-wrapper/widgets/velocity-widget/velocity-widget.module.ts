import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VelocityWidgetComponent } from './velocity-widget.component';



@NgModule({
  declarations: [VelocityWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [VelocityWidgetComponent]
})
export class VelocityWidgetModule { }
