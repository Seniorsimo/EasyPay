import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _token: string;

  constructor(private http: HttpClient) { }

  getToken(): string {
    if (this._token === null ||  this._token === undefined) {
      this._token = this.requestToken();
    }
    return this._token;
  }

  requestToken(username: string, password: string): string {
    const params = {username, password};
    return this.http.post<string>('', params);
  }
}
