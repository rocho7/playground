import { Component, OnInit, ViewChild } from '@angular/core';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LoggerService } from './logger.service';
import { TYPE_OF_SERVICE } from './useFactoryExample/const/typeofService.const';
import { ExampleFactoryOneService } from './useFactoryExample/services/example-factory-one.service';
import { ExampleFactoryTwoService } from './useFactoryExample/services/example-factory-two.service';

@Component({
  selector: 'app-dependency-provider',
  templateUrl: './dependency-providers.component.html',
  providers: [
    // {
    //   provide: LoggerService,
    //   useExisting: ExperimentalLoggerService
    // }
    {

    provide: LoggerService,
    useFactory: () =>{
      const dev = Math.random() > 0.5;
      console.log('%cuseFactory ', 'color: red; display: block; width: 100%;', dev);
      if (dev) {
        return new LoggerService();
      } else {
        return new ExperimentalLoggerService();
      }
    },
    deps: []
    }
  ]
})
export class DependencyProvidersComponent implements OnInit {

  serviceSelected: string = '';

  constructor(
    private readonly logger: LoggerService,
    public readonly serviceOne: ExampleFactoryOneService,
    public readonly serviceTwo: ExampleFactoryTwoService,
  ) { }

  ngOnInit(): void {
    this.logger.prefix = 'App';
    this.logger.log('dependency providers init')
  }

  destroyChildComponent(): void {
    this.serviceSelected = '';
  }

  buildChildComponent(service: string): void {
    setTimeout(()=> {
      this.serviceSelected = service;
    }, 1000)

  }

  changeService(service: string) {
    if ( this.serviceSelected ) {
      this.destroyChildComponent();
    } else {
    }
    if ( service === 'one' ) {
      TYPE_OF_SERVICE.one = true;
      this.serviceOne.typeService.next('one')
      // this.serviceOne.typeOfService(service);
    } else {
      TYPE_OF_SERVICE.one = false;
      // TYPE_OF_SERVICE.one = false;
      this.serviceTwo.typeService.next('two');
    }
    this.buildChildComponent(service);

    // this.serviceTwo.typeOfService(service);
  }

}
