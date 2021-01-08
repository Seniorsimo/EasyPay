import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthStore } from '../features/login-page/store/auth.store';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private authStore: AuthStore, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', this.authStore.token || '')
    });
    return next.handle(authReq).pipe(
      tap( (response: HttpResponse<any>) => {
        if ( response && response.status === 403 ) {
          console.error('Token di accesso scaduto, logout!');
          this.authStore.token = undefined;
          this.router.navigate([]);
        }
      })
    );
  }
}
