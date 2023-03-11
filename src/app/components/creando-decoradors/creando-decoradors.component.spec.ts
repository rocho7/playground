import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreandoDecoradorsComponent } from './creando-decoradors.component';

describe('CreandoDecoradorsComponent', () => {
  let component: CreandoDecoradorsComponent;
  let fixture: ComponentFixture<CreandoDecoradorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreandoDecoradorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreandoDecoradorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
