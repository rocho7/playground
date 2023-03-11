import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '50px')
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', 'bold')
    this.renderer.setStyle(this.el.nativeElement, 'fontStyle', 'italic')
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue')
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid red')

   }

}
