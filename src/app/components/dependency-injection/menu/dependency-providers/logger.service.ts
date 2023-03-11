import { Injectable } from '@angular/core';
import { ILogger } from './logger.interface';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ILogger {

  prefix: string = "root";
  constructor() { }
  log( message: string ) {
    console.log('%cLOGGER SERVICE ', 'color: white; background-color: #007acc;', message);
  }
}
