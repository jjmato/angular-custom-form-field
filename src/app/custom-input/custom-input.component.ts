import { Component, forwardRef, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  template: `
  <input [(ngModel)]="value" value="value"/>
  <p>local: {{val}}</p>`,
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: CustomInputComponent,
    //   multi: true
    // }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {

  constructor(
    @Optional() @Self() public control: NgControl
  ) { 
    this.value = this.control.value;
    this.control.valueAccessor = this;
    // window.control = this.control;
  }

  onChange: any = () => { }
  onTouch: any = () => { }
  val = ""

  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val
      this.onChange(val)
      this.onTouch(val)
    }

  }

  writeValue(value: any) {
    this.value = value
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

}