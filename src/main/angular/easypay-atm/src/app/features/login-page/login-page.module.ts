import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { LoginPageComponent } from './login-page.component';
import { LoginService } from './services/login.service';
import { LoginStore } from './store/login.store';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [LoginPageComponent],
  providers: [LoginService, LoginStore]
})
export class LoginPageModule {}
