import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { RoutersPath } from '../constants/routing.constants';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  activeSection = '';
  activeSection$ = new Subject<string>();


  constructor(private router: Router) { }


  /** gestisce l'header nel TemplateComponent */
  updateHeader(text: string) {
    this.activeSection = text;
    this.activeSection$.next(text);
  }

  gotoHome() {
    this.router.navigate([RoutersPath.home]);
  }

  gotoLogin() {
    this.router.navigate([RoutersPath.login]);
  }

  gotoReload() {
    this.router.navigate([RoutersPath.reload]);
  }

  gotoPayment() {
    this.router.navigate([RoutersPath.payment]);
  }

  gotoMovement() {
    this.router.navigate([RoutersPath.movement]);
  }
}
