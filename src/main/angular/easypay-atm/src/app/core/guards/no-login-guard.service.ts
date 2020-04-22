import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from 'src/app/features/login-page/store/auth.store';
import { RoutersPath } from '../constants/routing.constants';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard {

  constructor(private router: Router, private loginStore: AuthStore) { }

  canActivate(): boolean {
    if (this.loginStore.token) {
      this.router.navigate([RoutersPath.home]);
      return false;
    }
    return true;
  }
}
