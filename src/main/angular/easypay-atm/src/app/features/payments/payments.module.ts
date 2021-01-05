import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from '../../shared';
import { DialogPaymentComponent } from './components/dialog-payment/dialog-payment.component';
import { PaymentsComponent } from './payments.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [PaymentsComponent, DialogPaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  exports: [PaymentsComponent]
})
export class PaymentsModule { }
