import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getItem(name: string) {
    const item = localStorage.getItem(name);
    return JSON.parse(!item || item === 'undefined' ? null : item);
  }

  public setItem(name: string, value: any) {
    if (value === undefined) {
      localStorage.removeItem(name);
    } else {
      localStorage.setItem(name, JSON.stringify(value));
    }
  }
}
