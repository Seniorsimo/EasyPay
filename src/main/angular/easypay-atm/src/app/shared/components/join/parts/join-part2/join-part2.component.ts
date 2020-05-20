import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join-part2',
  templateUrl: './join-part2.component.html',
  styleUrls: ['./join-part2.component.scss']
})
export class JoinPart2Component implements OnInit {

    /** controller del form */
    formCrl: FormGroup;

    constructor(private fb: FormBuilder) {
      this.formCrl = this.fb.group({
        nome: this.fb.control('', [Validators.required]),
        cognome: this.fb.control('', [Validators.required]),
        cf: this.fb.control('', [Validators.required]),
      });
    }

  ngOnInit(): void {
  }

}
