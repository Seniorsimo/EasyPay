import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AbstractJoinPartComponent } from '../abstract-join-part/abstract-join-part.component';

@Component({
  selector: 'app-join-part1',
  templateUrl: './join-part1.component.html',
  styleUrls: ['./join-part1.component.scss'],
})
export class JoinPart1Component extends AbstractJoinPartComponent
  implements OnInit {
  constructor(private fb: FormBuilder) {
    super();
    this.formCrl = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      cognome: this.fb.control('', [Validators.required]),
      cf: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  getValue() {
    return {
      nome: this.formCrl.controls.nome.value,
      cognome: this.formCrl.controls.cognome.value,
      cf: this.formCrl.controls.cf.value,
    };
  }
}
