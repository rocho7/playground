import { Injectable, Inject, InjectionToken } from '@angular/core';


export const APP_NAME = new InjectionToken<string>('APP_NAME');
@Injectable({
  providedIn: 'root'
})
export class MyConfigService {

  constructor(
    @Inject(APP_NAME) public appName: string
  ) { }

  getAppName() {
    return this.appName;
  }
}
