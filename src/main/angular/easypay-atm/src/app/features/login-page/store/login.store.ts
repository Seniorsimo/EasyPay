import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStore {

  private pToken: string;


  public get token() {

    return this.pToken || this.getLocalStorage('token');
  }

  public set token(token) {
    this.pToken = token;
    localStorage.setItem('token', token);
  }

  constructor() { }


  private getLocalStorage(variable: string) {
    return JSON.parse(localStorage[variable] === 'undefined' ? null : localStorage[variable]);
  }

}
