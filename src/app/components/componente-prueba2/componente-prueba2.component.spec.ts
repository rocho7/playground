import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePrueba2Component } from './componente-prueba2.component';

describe('ComponentePrueba2Component', () => {
  let component: ComponentePrueba2Component;
  let fixture: ComponentFixture<ComponentePrueba2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentePrueba2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePrueba2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
