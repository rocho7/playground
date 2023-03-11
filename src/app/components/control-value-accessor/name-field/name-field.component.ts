import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-name-field',
  templateUrl: './name-field.component.html',
  styleUrls: ['./name-field.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NameFieldComponent,
    multi: true
  }]
})

// ? https://www.youtube.com/watch?v=OrmIfW8Ak3w&list=PLX7eV3JL9sfkgIka4CmlLMkErbaVPe4LC

export class NameFieldComponent implements OnInit, ControlValueAccessor {
  isLocked = false;
  onChange: (value: boolean) => void;
  onTouched: () => void;
  constructor() { }
  writeValue(obj: any): void {
    console.log('%cwritevalue valor pasado desde el componente padre ', 'color: red; display: block; width: 100%;', obj);
    this.isLocked = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }

  setValue() {
    this.isLocked = !this.isLocked;
    this.onChange(this.isLocked);
    this.onTouched();
  }

}
