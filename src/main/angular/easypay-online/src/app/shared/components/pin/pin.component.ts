import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { numericValidator } from '../../directives/numeric.directive';
import { ClienteService, PrezzoService, CUSTOM_ERROR } from '../../../core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
  /** controller del form */
  formCrl: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private pagamentoService: PrezzoService
  ) {
    this.formCrl = this.fb.group({
      userId: this.fb.control('', [Validators.required]),
      pinCode: this.fb.control('', [Validators.required, numericValidator(), Validators.minLength(4), Validators.maxLength(4)])
    });
  }

  ngOnInit() {}

  login() {
    this.clienteService.getClienteByPin(this.formCrl.value.userId, this.formCrl.value.pinCode).subscribe(result => {
      if (result.type !== CUSTOM_ERROR) {
        this.pagamentoService.handlePagamento();
      }
    });
  }
}
