import { Injectable } from '@angular/core';
import { ILogger } from './logger.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements ILogger {
  prefix: string = "root";

  constructor() { }
  log( message: string ) {
    console.log('%c experimental SERVICE', 'color: white; background-color: #007acc;', this.prefix, message);
  }

  log2( message: string ) {
    console.log('%c experimental', 'color: white; background-color: #007acc;', this.prefix, message);
  }
}
