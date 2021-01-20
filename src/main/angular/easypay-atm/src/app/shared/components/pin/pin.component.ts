import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/core';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
  /** controller del form */
  formCrl: FormGroup;

  @Output() clientAuthEvent = new EventEmitter<Cliente>();

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
  ) {
    this.formCrl = this.fb.group({
      userId: this.fb.control('', [Validators.required]),
      pin: this.fb.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)])
    });
  }

  ngOnInit() {}

  login() {
    this.clienteService.getClienteByPin(this.formCrl.value.userId, this.formCrl.value.pin).subscribe(
      cliente => this.clientAuthEvent.emit(cliente)
    );
  }
}
