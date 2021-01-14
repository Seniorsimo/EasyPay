import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { DialogRechargeComponent } from './components/dialog-recharge/dialog-recharge.component';
import { RechargeComponent } from './recharge.component';



@NgModule({
  declarations: [RechargeComponent, DialogRechargeComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class RechargeModule { }
