import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join-part1',
  templateUrl: './join-part1.component.html',
  styleUrls: ['./join-part1.component.scss']
})
export class JoinPart1Component implements OnInit {

  /** controller del form */
  formCrl: FormGroup;

  @Output() valuesOutput = new EventEmitter<{username: string, password: string}>();

  constructor(private fb: FormBuilder) {
    this.formCrl = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
    });
  }

  ngOnInit(): void {
  }

}
