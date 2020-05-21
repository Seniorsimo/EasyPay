import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AbstractJoinPartComponent } from '../abstract-join-part/abstract-join-part.component';

@Component({
  selector: 'app-join-part0',
  templateUrl: './join-part0.component.html',
  styleUrls: ['./join-part0.component.scss'],
})
export class JoinPart0Component extends AbstractJoinPartComponent
  implements OnInit {
  @Output() valuesOutput = new EventEmitter<{
    username: string;
    password: string;
  }>();

  constructor(private fb: FormBuilder) {
    super();
    this.formCrl = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
    });
  }

  ngOnInit(): void {}

  getValue() {
    return {
      username: this.formCrl.controls.username.value,
      password: this.formCrl.controls.password.value,
    };
  }
}
