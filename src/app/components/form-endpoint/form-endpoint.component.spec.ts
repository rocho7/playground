import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEndpointComponent } from './form-endpoint.component';

describe('FormEndpointComponent', () => {
  let component: FormEndpointComponent;
  let fixture: ComponentFixture<FormEndpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEndpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
