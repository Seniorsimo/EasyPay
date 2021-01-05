import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Commerciante, COMMERCIANTE_TYPE } from '../models/commerciante.model';

@Injectable({
  providedIn: 'root'
})
export class CommercianteService {
  contoCommerciante$: BehaviorSubject<Commerciante>;

  constructor(private httpClient: HttpClient) {
    this.contoCommerciante$ = new BehaviorSubject({
      type: COMMERCIANTE_TYPE,
      idConto: '',
      nome: '',
      nomenclatura: ''
    });
  }

  getConto(idConto: string): Observable<Commerciante> {
    // se già presente nello store non riscarica i dati del cliente:
    if (this.contoCommerciante$.value.idConto) {
      return this.contoCommerciante$;
    }

    // if (!idConto) {
    //   return of(new WrongParamError(idConto));
    // }

    return this.httpClient
      .get<Commerciante>(`/api/commercianti/${idConto}`)
      .pipe(
        map(result => {
            const commerciante = { type: COMMERCIANTE_TYPE, ...result };
            this.contoCommerciante$.next(commerciante);
            return commerciante;
        }),
        catchError(error => {
          throw error;
        })
      );
  }
}
