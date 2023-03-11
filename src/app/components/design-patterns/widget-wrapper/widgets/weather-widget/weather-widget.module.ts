import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './weather-widget.component';



@NgModule({
  declarations: [WeatherWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [WeatherWidgetComponent]
})
export class WeatherWidgetModule { }
