import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundIndexComponent } from './playground-index.component';

describe('PlaygroundIndexComponent', () => {
  let component: PlaygroundIndexComponent;
  let fixture: ComponentFixture<PlaygroundIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
