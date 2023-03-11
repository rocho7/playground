import { ModuleWithProviders, NgModule } from '@angular/core';
import { MyConfigService, APP_NAME } from './my-config.service';



@NgModule({
  providers: []
})
export class MyConfigServiceModule {
  static forRoot(appName: string): ModuleWithProviders<any> {
    return {
      ngModule: MyConfigServiceModule,
      providers: [
        { provide: APP_NAME, useValue: appName},
        MyConfigService
      ]
    }
  }
 }
