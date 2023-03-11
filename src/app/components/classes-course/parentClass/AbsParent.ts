import { Injector } from "@angular/core";
import {
  Animal
} from './Animal';

export  abstract class AbsParent {
  public readonly injector: Injector;

  lastName: string;
  constructor(
     injector: Injector,


  ) {

  }

  onHandleAbsParent(): void {
    console.log("AbsParent");
  }

  deleteRow( data: string ) {
    console.log("data ", data);
  }
}
