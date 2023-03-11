import { Component, OnInit } from '@angular/core';
import { WIDGET_INJECTOR } from '../../injector-token/widget-injector-token';
import { IWidgetInjectorToken } from '../../interface/widget-injector-token.interface';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.css'],
  providers: [
    {
      provide: WIDGET_INJECTOR,
      useExisting: VelocityWidgetComponent
    }
  ]
})
export class VelocityWidgetComponent implements OnInit, IWidgetInjectorToken {

  constructor() { }

  ngOnInit(): void {
  }

  load(): void {
    console.log('%cVelocityComponent loading ', 'color: red; display: block; width: 100%;', );
  }

  refresh(): void {
    console.log('%cVelocityComponent refresing ', 'color: white; background-color: #ff7acc;', );
  };


}
