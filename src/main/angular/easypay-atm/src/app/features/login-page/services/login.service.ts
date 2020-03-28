import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiRoute } from '../../../core';
import { map } from 'rxjs/operators';
import { LoginStore } from '../store/login.store';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private pToken: string;

  constructor(private http: HttpClient, private loginStore: LoginStore) { }

  getToken(username: string, password: string) {
    const params = {username, password};
    return this.http.post<{token: string}>(ApiRoute.login, params).pipe(map(response => {
      if (response && response.token) {
        this.loginStore.token = response.token;
        return response.token;
      }
      return '';
    }));
  }
}
