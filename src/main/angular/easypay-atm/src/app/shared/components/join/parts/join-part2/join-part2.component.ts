import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AbstractJoinPartComponent } from '../abstract-join-part/abstract-join-part.component';

@Component({
  selector: 'app-join-part2',
  templateUrl: './join-part2.component.html',
  styleUrls: ['./join-part2.component.scss'],
})
export class JoinPart2Component extends AbstractJoinPartComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    super();
    this.formCrl = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      cognome: this.fb.control('', [Validators.required]),
      cf: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {}


}
