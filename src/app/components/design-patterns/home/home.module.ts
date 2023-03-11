import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WidgetWrapperModule } from '../widget-wrapper/widget-wrapper.module';
import { VelocityWidgetModule } from '../widget-wrapper/widgets/velocity-widget/velocity-widget.module';
import { WeatherWidgetModule } from '../widget-wrapper/widgets/weather-widget/weather-widget.module';
import { DataGridWrapperModule } from '../data-grid-wrapper/data-grid-wrapper.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    WidgetWrapperModule,
    VelocityWidgetModule,
    WeatherWidgetModule,
    DataGridWrapperModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
