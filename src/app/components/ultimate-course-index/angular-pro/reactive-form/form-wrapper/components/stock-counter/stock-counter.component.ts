import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true,
};

@Component({
  selector: "app-stock-counter",
  providers: [COUNTER_CONTROL_ACCESSOR],
  templateUrl: "./stock-counter.component.html",
  styleUrls: ["./stock-counter.component.scss"],
})
export class StockCounterComponent implements ControlValueAccessor {
  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10;
  focus: boolean;

  onTouch: Function;
  onChange: Function;

  writeValue(value: any): void {
    this.value = value || 0;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onKeyDown(event: KeyboardEvent) {
    const handlers: any = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment(),
    };
    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
    this.onTouch();
  }
  onBlur(event: FocusEvent) {
    this.focus = false;
    this.stopDefaultBehavior(event);
  }
  onFocus(event: FocusEvent) {
    this.focus = true;
    this.stopDefaultBehavior(event);
  }

  stopDefaultBehavior(event: FocusEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  increment(): void {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onChange(this.value);
    }
    this.onTouch();
  }

  decrement(): void {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onChange(this.value);
    }
    this.onTouch();
  }
}
