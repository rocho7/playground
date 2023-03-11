import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-element-input-filter',
  templateUrl: './element-input-filter.component.html',
  styleUrls: ['./element-input-filter.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> ElementInputFilterComponent),
      multi: true,
    }
  ]
})
export class ElementInputFilterComponent implements ControlValueAccessor {

  private onChange:   Function;
  private onTouched = Function;
  inputValue: any;

  constructor() { }

  writeValue(obj: any): void {
    this.inputValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  changeInput(ev: any): void {
    this.onChange(ev.target.value);
    this.onTouched();
  }


}
