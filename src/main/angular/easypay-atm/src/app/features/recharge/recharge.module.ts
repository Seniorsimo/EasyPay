import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechargeComponent } from './recharge.component';
import { SharedModule } from 'src/app/shared';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogRechargeComponent } from './components/dialog-recharge/dialog-recharge.component';



@NgModule({
  declarations: [RechargeComponent, DialogRechargeComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
  ]
})
export class RechargeModule { }
