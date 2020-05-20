import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join-part3',
  templateUrl: './join-part3.component.html',
  styleUrls: ['./join-part3.component.scss']
})
export class JoinPart3Component implements OnInit {

  /** controller del form */
  formCrl: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCrl = this.fb.group({
      userType: this.fb.control('', []),
      piva: this.fb.control('', [Validators.required]),
      ragSoc: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

}
