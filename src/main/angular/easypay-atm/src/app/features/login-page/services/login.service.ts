import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiRoute } from '../../../core';
import { map, catchError } from 'rxjs/operators';
import { AuthStore } from '../store/auth.store';
import { of } from 'rxjs';

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
