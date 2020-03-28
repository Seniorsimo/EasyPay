import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStore } from 'src/app/features/login-page/store/login.store';
import { RoutersPath } from '../constants/routing.constants';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard {

  constructor(private router: Router, private loginStore: LoginStore) { }

  canActivate(): boolean {
    if (this.loginStore.token) {
      this.router.navigate([RoutersPath.home]);
      return false;
    }
    return true;
  }
}
