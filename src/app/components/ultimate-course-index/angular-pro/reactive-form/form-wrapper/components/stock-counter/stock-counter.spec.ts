import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StockCounterComponent } from "./stock-counter.component";

fdescribe("StockCounterComponent", () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      declarations: [StockCounterComponent],
    });
    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;

    component.value = 10;
  });

  it("checking increment method", () => {
    component.increment();
    expect(component.value).toBe(20);
  });

  it("checking decrement method", () => {
    component.increment();
    expect(component.value).toBe(20);
    component.decrement();
    expect(component.value).toBe(10);
  });

  it("should not decrement below the minimun value", () => {
    component.increment();
    expect(component.value).toBe(20);
    component.decrement();
    expect(component.value).toBe(10);
    component.decrement();
    expect(component.value).toBe(10);
  });

  it("checking not increment below the maximun value", () => {
    for (let i = 0; i < 2000; i++) {
      component.increment();
    }
    expect(component.value).toBe(1000);
  });

  it("SHOULD NOT INCREMENT over the maximun value TESTING @INPUT", () => {
    component.step = 20;
    component.max = 20;
    component.increment();
    component.increment();
    expect(component.value).toBe(30);
  });
});
