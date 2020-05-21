import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-abstract-join-part',
  templateUrl: './abstract-join-part.component.html',
  styleUrls: ['./abstract-join-part.component.scss']
})
export abstract class AbstractJoinPartComponent implements OnInit {

  /** controller del form */
  formCrl: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  validate() {
    if (this.formCrl.valid) {
      return true;
    } else {
      this.validateAllFormFields(this.formCrl);
      return false;
    }
  }

  abstract getValue(): object;

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
