import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesCourseComponent } from './classes-course.component';

describe('ClassesCourseComponent', () => {
  let component: ClassesCourseComponent;
  let fixture: ComponentFixture<ClassesCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
