import { Directive, OnInit } from '@angular/core';

@Directive()
export abstract class BasePrueba implements OnInit {

  protected variable1: string
  protected variable2: string;
  protected obj: any;

  constructor(
     variable1: string,
     variable2: string,
     obj: any,
  ) {
    this.variable1 = variable1;
    this.variable2 = variable2;
    this.obj = obj;
   }

  ngOnInit(): void {
    this.getVariable('variable from abstract class');
  }

  protected abstract getVariable(param: string): void;

  get variableInfo(): string {
    return `yeee ${this.variable2}`;
    // return `${this.variable1}`;
  }

  showObject(): void {
    console.log('%cshowObject ', 'background: green; color: white; display: block;', this.obj);
    console.log('%cshowObject ', 'background: green; color: white; display: block;', this.obj.sayHello());
  }
}
