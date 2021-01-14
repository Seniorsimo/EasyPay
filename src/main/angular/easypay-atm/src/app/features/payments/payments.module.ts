import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { DialogPaymentComponent } from './components/dialog-payment/dialog-payment.component';
import { PaymentsComponent } from './payments.component';

@NgModule({
  declarations: [PaymentsComponent, DialogPaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [PaymentsComponent]
})
export class PaymentsModule { }
