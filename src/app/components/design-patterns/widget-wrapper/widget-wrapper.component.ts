import { Component, ContentChild, OnInit } from '@angular/core';
import { WIDGET_INJECTOR } from './injector-token/widget-injector-token';
import { IWidgetInjectorToken } from './interface/widget-injector-token.interface';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.css']
})
export class WidgetWrapperComponent implements OnInit {

  @ContentChild(WIDGET_INJECTOR as any, { static: true} ) widget: IWidgetInjectorToken;
  constructor() { }

  ngOnInit(): void {
    this.widget.load();
  }

  refresh(): void {
    this.widget.refresh();
  }

}
