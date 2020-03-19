import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { LoginPageComponent } from './login-page.component';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [LoginPageComponent],
})
export class LoginPageModule { }
