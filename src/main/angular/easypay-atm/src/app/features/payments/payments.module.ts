import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { PaymentsComponent } from './payments.component';



@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [PaymentsComponent]
})
export class PaymentsModule { }
