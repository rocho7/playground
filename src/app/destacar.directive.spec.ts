import { ElementRef, Renderer2 } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { DestacarDirective } from './destacar.directive';

describe('DestacarDirective', () => {
  it('should create an instance', () => {

    const el: ElementRef = TestBed.inject(ElementRef);
    const renderer: Renderer2 = TestBed.inject(Renderer2)
    const directive = new DestacarDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
