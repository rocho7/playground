import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionZoneWrapperComponent } from './dependency-injection-zone-wrapper.component';

describe('DependencyInjectionZoneWrapperComponent', () => {
  let component: DependencyInjectionZoneWrapperComponent;
  let fixture: ComponentFixture<DependencyInjectionZoneWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyInjectionZoneWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectionZoneWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
