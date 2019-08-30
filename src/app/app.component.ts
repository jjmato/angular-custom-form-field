import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  external : string;

  constructor(
    private fb: FormBuilder
  ){
    this.fb.group({
      'custom': [
        'init_value',
        [
          Validators.minLength(2),
          Validators.maxLength(5),
        ]
      ]
    })
  }
}
