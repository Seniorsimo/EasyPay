import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { numericValidator } from '../../directives/numeric.directive';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
  /** controller del form */
  formCrl: FormGroup;

  @Output() loginEvent = new EventEmitter<{username: string, password: string}>();

  constructor(
    private fb: FormBuilder
  ) {
    this.formCrl = this.fb.group({
      userId: this.fb.control('', [Validators.required]),
      pinCode: this.fb.control('', [Validators.required, numericValidator(), Validators.minLength(4), Validators.maxLength(4)])
    });
  }

  ngOnInit() {}

  login() {
    this.loginEvent.emit({username: this.formCrl.value.userId, password: this.formCrl.value.pinCode});
  }
}
