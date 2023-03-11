import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUseFactory } from '../interfaces/useFactory.interface';

@Injectable({
  providedIn: 'root'
})
export class ExampleFactoryOneService implements IUseFactory {


  message: string = 'ExampleFactoryOneService method';
  typeService = new BehaviorSubject<string>('');
  constructor() { }

  typeOfService (service: string){
    this.typeService.next(service);
  };

  get (): string {
    console.log(`%c${this.message} GET`, 'background: green; color: white; display: block;', );
    return `${this.message} GET`;
  };
  post?: (() => string) | undefined;
  delete?: (() => string) | undefined;
}
