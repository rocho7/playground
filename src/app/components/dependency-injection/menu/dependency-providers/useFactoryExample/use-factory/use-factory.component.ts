import { Component, OnDestroy, OnInit } from '@angular/core';
import { TYPE_OF_SERVICE } from '../const/typeofService.const';
import { ExampleFactoryOneService } from '../services/example-factory-one.service';
import { ExampleFactoryTwoService } from '../services/example-factory-two.service';
const environment = {
  pro: true
};
@Component({
  selector: 'app-use-factory',
  templateUrl: './use-factory.component.html',
  styleUrls: ['./use-factory.component.css'],
  providers: [

    { provide: 'ENVIRONMENT', useValue: environment },
    { provide: 'typeOfService', useValue: TYPE_OF_SERVICE },
    {
      provide: ExampleFactoryOneService,
      useFactory: (en: any, typeOfService: any) => {
      console.log('%cENVIRONMENT', 'color: red; display: block; width: 100%;', en, typeOfService);
        if ( typeOfService?.one ) {
          return new ExampleFactoryOneService;
        }else {
          return new ExampleFactoryTwoService;
        }
      },
      deps: ['ENVIRONMENT', 'typeOfService']
    }
  ],
})
export class UseFactoryComponent implements OnInit, OnDestroy {

  messageService: string;

  constructor(
    private readonly serviceAny: ExampleFactoryOneService
  ) { }


  ngOnInit(): void {
   this.messageService = this.serviceAny.get();
  }

  ngOnDestroy() {
    console.log('%cbye bye ', 'color: white; background-color: #007acc;', );
  }



}
