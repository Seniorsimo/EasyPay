import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginStore } from 'src/app/features/login-page/store/login.store';
import { RoutersPath } from '../constants/routing.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginStore: LoginStore) { }

  canActivate(): boolean {
    if (!this.loginStore.token) {
      this.router.navigate([RoutersPath.login]);
      return false;
    }
    return true;
  }
}
