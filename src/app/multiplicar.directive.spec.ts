import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MultiplicarDirective } from './multiplicar.directive';

describe('MultiplicarDirective', () => {
  it('should create an instance', () => {

    const templateRef: TemplateRef<any> = TestBed.inject(TemplateRef);
    const viewContainerRef: ViewContainerRef= TestBed.inject( ViewContainerRef);
    const directive = new MultiplicarDirective(templateRef, viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
