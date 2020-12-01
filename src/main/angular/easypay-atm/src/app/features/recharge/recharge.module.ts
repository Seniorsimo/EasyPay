import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechargeComponent } from './recharge.component';
import { SharedModule } from 'src/app/shared';



@NgModule({
  declarations: [RechargeComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class RechargeModule { }
