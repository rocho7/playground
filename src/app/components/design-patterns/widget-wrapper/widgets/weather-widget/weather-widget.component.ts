import { Component, OnInit } from '@angular/core';
import { WIDGET_INJECTOR } from '../../injector-token/widget-injector-token';
import { IWidgetInjectorToken } from '../../interface/widget-injector-token.interface';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [
    {
      provide: WIDGET_INJECTOR,
      useExisting: WeatherWidgetComponent
    }
  ]
})
export class WeatherWidgetComponent implements OnInit, IWidgetInjectorToken {

  constructor() { }

  ngOnInit(): void {
  }

  load(): void {
    console.log('%cWeatherWidgetComponent loading ', 'color: red; display: block; width: 100%;', );
  }

  refresh(): void {
    console.log('%cWeatherWidgetComponent refresing ', 'color: white; background-color: #ff7acc;', );
  };

}
