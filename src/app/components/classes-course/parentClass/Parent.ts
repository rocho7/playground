import { Injector } from '@angular/core';
import { AbsParent } from './AbsParent';

export abstract class Parent extends AbsParent {

    public name: string;
    public lastName: string;
    public age: number;
  // public injector: Injector;

  constructor(
    injector: Injector,

  ) {
    super(injector);

  }

  getFullName() {
    console.log(`Hi! my name is ${this.name} - ${this.lastName} and I'm ${this.age} years old.`);
  }
}
