import { Directive, PipeTransform } from "@angular/core";

@Directive({
  selector: "appShowInfoProduct",
})
export class ShowInfoProductDirective implements PipeTransform {
  constructor() {}

  transform(value: any): any {
    return `${value.name} ${value.price}`;
  }
}
