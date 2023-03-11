import { Injectable } from '@angular/core';
import { IUseClass } from '../interfaces/useClass.interface';

@Injectable({
  providedIn: 'root'
})
export class ExampleTwoService implements IUseClass {

  message: string = 'ExampleTwoService method';

  constructor() { }

  get (): string {
    console.log(`%c${this.message} GET`, 'background: green; color: white; display: block;', );
    return `${this.message} GET`;
  };
  post(): string {
    console.log(`%c${this.message} POST`, 'background: green; color: white; display: block;', );
    return `${this.message} POST`;
  };
}
