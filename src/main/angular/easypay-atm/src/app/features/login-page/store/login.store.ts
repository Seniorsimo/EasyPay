import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStore {

  private pToken: string;


  public get token() {
    if (!this.pToken) {
      this.pToken = this.localStorageService.getItem('token');
    }
    return this.pToken;
  }

  public set token(token) {
    this.pToken = token;
    this.localStorageService.setItem('token', token);
  }

  constructor(private localStorageService: LocalStorageService) { }

}
