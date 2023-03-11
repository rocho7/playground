import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiplicar]'
})
export class MultiplicarDirective {


  constructor( private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  @Input() set appMultiplicar( numero: number ){
    if ( numero > 0 ) {
      for ( var i= 0; i < numero; i++ ){
        this.viewContainerRef.createEmbeddedView( this.templateRef, {index:`index procedente de la directiva ${i}.-`} )
      }
    } else {
      this.viewContainerRef.clear()
    }
  }
}
