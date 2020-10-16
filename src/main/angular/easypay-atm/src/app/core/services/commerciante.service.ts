import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiResponse } from '../models/api.response';
import { Commerciante, COMMERCIANTE_TYPE } from '../models/commerciante.model';
import { CustomError, WrongParamError, CUSTOM_ERROR } from '../models/error.model';

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

  getConto(idConto: string): Observable<Commerciante | CustomError> {
    // se già presente nello store non riscarica i dati del cliente:
    if (this.contoCommerciante$.value.idConto) {
      return this.contoCommerciante$;
    }

    if (!idConto) {
      return of(new WrongParamError(idConto));
    }

    return this.httpClient
      .get<ApiResponse<Commerciante>>(`/api/commercianti/${idConto}`)
      .pipe(
        map(result => {
          if (result && result.success) {
            const commerciante = { type: COMMERCIANTE_TYPE, ...result.body };
            this.contoCommerciante$.next(commerciante);
            return commerciante;
          } else {
            throw { type: CUSTOM_ERROR, name: 'account not found', message: `non è stato possibile trovare l'account` };
          }
        })
      );
  }
}
