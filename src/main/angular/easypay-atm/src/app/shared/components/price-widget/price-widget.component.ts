import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-price-widget',
  templateUrl: './price-widget.component.html',
  styleUrls: ['./price-widget.component.scss']
})
export class PriceWidgetComponent implements OnInit {

  @Input() title: string;
  /** nome del bottone da cliccare */
  @Input() operationLabel: string;
  /** flag che fa apparire il tasto per la fattura elettronica */
  @Input() canInvoice: boolean;

  @Output() payStatus = new EventEmitter<{price: string, date: string, invoice: string}>();

  formCrl: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCrl = this.fb.group({
      price: this.fb.control('', [Validators.required]),
      date: this.fb.control({value: this.getDateNow(), disabled: true}, [Validators.required]),
      invoice: this.fb.control(false, []),
    });
  }

  private getDateNow() {
    return new Date().toISOString().substr(0, 10);
  }

  /** effettua l'azione di submit del bottone */
  makeAction(submit: MatButton) {
    if (!this.formCrl.invalid) {
      // NOTA: date non è incluso in formCtr perchè è disabilitato
      this.payStatus.emit({...this.formCrl.value, date: this.getDateNow()});
      this.formCrl.disable();
      submit.disabled = true;
    }
  }

}
