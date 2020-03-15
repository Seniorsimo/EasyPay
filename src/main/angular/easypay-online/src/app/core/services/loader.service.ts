import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum LoadingStatus {
  LOADING = '',
  FAILED = 'FAILED',
  SUCCESS = 'SUCCESS'
}

/** service sche gestisce il loader */
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  /** Alla fine del caricamento chiude il loader e apre la modale */
  status$: BehaviorSubject<LoadingStatus>;

  constructor() {
    this.status$ = new BehaviorSubject(LoadingStatus.LOADING);
  }

  changeStatus(status: LoadingStatus) {
    this.status$.next(status);
  }
}
