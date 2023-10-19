import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingThisComponent } from './understanding-this.component';

describe('UnderstandingThisComponent', () => {
  let component: UnderstandingThisComponent;
  let fixture: ComponentFixture<UnderstandingThisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingThisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandingThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
