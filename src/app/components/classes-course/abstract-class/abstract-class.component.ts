import { Component, OnInit } from '@angular/core';
import { BasePrueba } from '../class/abstractClass.component';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.component.html',
  styleUrls: ['./abstract-class.component.css']
})
export class AbstractClassComponent extends BasePrueba implements OnInit {

  variable1: string;
  variable2: string = "variable2 from component";
  obj: any = {
    name: 'Perico',
    city: 'NY',
    phone: 33344,
    sayHello: this.greetingHi
  };
  constructor(
  ) {
    super(
      "variable1",
      "variable2",
      "obj",
    );
  }

  ngOnInit(): void {
    super.ngOnInit()
    super.showObject();
  }

  getVariable(data: string): void {
    console.log('%cgetVariable ', 'color: red; display: block; width: 100%;', data);
    console.log('%cvariabeInfo ', 'color: red; display: block; width: 100%;', super.variableInfo);
  }

  greetingHi(): void {
    console.log('%cgreeting ', 'color: red; display: block; width: 100%;', );
  }


}
