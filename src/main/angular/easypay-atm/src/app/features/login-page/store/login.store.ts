import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStore {

  private pToken: string;


  public get token() {
    if (!this.pToken) {
      this.pToken = this.getLocalStorage('token');
    }
    return this.pToken;
  }

  public set token(token) {
    this.pToken = token;
    this.setLocalStorage('token', token);
  }

  constructor() { }


  private getLocalStorage(name: string) {
    return JSON.parse(!localStorage[name] || localStorage[name] === 'undefined' ? null : localStorage[name]);
  }

  private setLocalStorage(name: string, value: any) {
    if (value === undefined) {
      localStorage.removeItem(value);
    } else {
      localStorage.setItem(name, JSON.stringify(value));
    }
  }

}
