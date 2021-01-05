import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { isBorn, isOver18 } from 'src/app/core/utils/custom-validator';

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
      bornDate: this.fb.control('', [Validators.required, isOver18, isBorn]),
      phone: this.fb.control('', []),
      address: this.fb.control('', []),
    });
  }

  ngOnInit(): void {}

  getValue() {
    return {
      nome: this.formCrl.controls.nome.value,
      cognome: this.formCrl.controls.cognome.value,
      cf: this.formCrl.controls.cf.value,
      bornDate: this.formCrl.controls.bornDate.value,
      phone: this.formCrl.controls.phone.value,
      address: this.formCrl.controls.address.value,
    };
  }
}
