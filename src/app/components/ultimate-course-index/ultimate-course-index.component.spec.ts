import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateCourseIndexComponent } from './ultimate-course-index.component';

describe('UltimateCourseIndexComponent', () => {
  let component: UltimateCourseIndexComponent;
  let fixture: ComponentFixture<UltimateCourseIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimateCourseIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateCourseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
