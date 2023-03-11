import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noRepeatMessage'
})
export class NoRepeatMessagePipe implements PipeTransform {

  transform(value: string): string {
    console.log('%cNO se llama a esta DIRECTIVA tantas veces como si asignas un método en el HTML', 'color: red; display: block; width: 100%;', );
    return value.toUpperCase();
  }

}
