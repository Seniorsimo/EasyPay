import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApiRoute } from '../../../core';
import { AuthStore } from '../store/auth.store';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient, private authStore: AuthStore) {}


  getToken(username: string, password: string) {
    const params = { username, password };
    return this.http.post<{ token: string }>(ApiRoute.login, params).pipe(
      map((response) => {
        if (response && response.token) {
          this.authStore.token = response.token;
          return response.token;
        }
        return '';
      }),
      catchError(error => {
        throw(error);
      })
    );
  }

  /** */
  logout() {
    return this.http.post(ApiRoute.logout, {}).pipe(
      map((response) => {
        if (response) {
          this.authStore.token = undefined;
        }
        return true;
      }),
      catchError(error => {
        console.error(error);
        this.authStore.token = undefined;
        return of(false);
      })
    );
  }
}
