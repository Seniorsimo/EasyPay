import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AbstractJoinPartComponent } from '../abstract-join-part/abstract-join-part.component';

@Component({
  selector: 'app-join-part3',
  templateUrl: './join-part3.component.html',
  styleUrls: ['./join-part3.component.scss']
})
export class JoinPart3Component extends AbstractJoinPartComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    super();
    this.formCrl = this.fb.group({
      userType: this.fb.control('', []),
      piva: this.fb.control('', [Validators.required]),
      ragSoc: this.fb.control('', [Validators.required]),
    });
  }
}
