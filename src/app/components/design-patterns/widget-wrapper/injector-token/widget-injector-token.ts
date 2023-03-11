import { InjectionToken } from "@angular/core"
import { IWidgetInjectorToken } from "../interface/widget-injector-token.interface";


export const WIDGET_INJECTOR = new InjectionToken<IWidgetInjectorToken>('widget');
