import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStore {

  private pToken: string;


  public get token() {

    return this.pToken || localStorage.getItem('token');
  }

  public set token(token) {
    this.pToken = token;
    localStorage.setItem('token', token);
  }

  constructor() { }

}
