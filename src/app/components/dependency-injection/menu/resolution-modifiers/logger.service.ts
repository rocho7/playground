import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log( message: string ) {
    console.log('%c ', 'color: white; background-color: #007acc;', message);
  }
}
