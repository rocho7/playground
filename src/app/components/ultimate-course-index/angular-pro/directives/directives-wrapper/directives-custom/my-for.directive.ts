import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appMyFor][appMyForOf]",
})
export class MyForDirective {
  @Input()
  set appMyForOf(collection: any) {
    this.view.clear();
    collection.forEach((item: any, index: any) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index,
      });
    });
  }
  constructor(
    private readonly view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
}
