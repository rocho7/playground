import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRdxComponent } from './ng-rdx.component';

describe('NgRdxComponent', () => {
  let component: NgRdxComponent;
  let fixture: ComponentFixture<NgRdxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRdxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRdxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
