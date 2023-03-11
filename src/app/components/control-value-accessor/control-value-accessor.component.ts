import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.css']
})
export class ControlValueAccessorComponent implements OnInit {

  form: FormGroup;
  formAccessor: FormGroup;
  formMultiple: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      itemName : new FormControl(),
      isLocked: new FormControl(true)

    });

    this.formAccessor = this.fb.group({
      name: this.fb.control('name data'),
      lastName: this.fb.control('last name data')
    });
    this.formAccessor.touched

    this.formMultiple = this.fb.group({
      elements: this.fb.array([])
    });
    this.addElement()
  }

  get elements() {
    return this.formMultiple.controls['elements'] as FormArray;
  }

  addElement() {
    const input = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control('')
    });
    this.elements.push(input);
  }

  onSubmit(): void {
    console.log('%conSubmit ', 'color: red; display: block; width: 100%;', this.form.value);
  }

  onSubmitFormArray(): void {
    console.log('%cArray from ', 'color: red; display: block; width: 100%;', this.formMultiple.value);
  }

}
