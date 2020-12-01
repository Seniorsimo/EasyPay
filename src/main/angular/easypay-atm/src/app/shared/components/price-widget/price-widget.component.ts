import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  @Output() submitAction = new EventEmitter<{price: string, date: string, invoice: string}>();

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
  makeAction() {
    // NOTA: date non è incluso in formCtr perchè è disabilitato
    this.submitAction.emit({...this.formCrl.value, date: this.getDateNow()});
  }

}
