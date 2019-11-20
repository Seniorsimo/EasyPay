import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiResponse } from '../models/api.response';
import { CUSTOM_ERROR, CustomError, WrongParamError } from '../models/error.model';
import { Cliente, CLIENTE_TYPE } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  cliente$: BehaviorSubject<Cliente>;

  constructor(private httpClient: HttpClient) {
    this.cliente$ = new BehaviorSubject({
      type: CLIENTE_TYPE,
      id: '',
      pin: '',
      token: '',
      nome: '',
      budget: 0,
    });
  }

  getClienteByPin(id: string, pin: string): Observable<Cliente | CustomError>  {
    // se già presente nello store non riscarica i dati del cliente:
    if (this.cliente$.value.id) {
      return this.cliente$;
    }

    if (!id || !pin) {
      return throwError(new WrongParamError({id, pin}));
    }

    return this.httpClient
      .get<ApiResponse<Cliente>>('/api/clienti', { params: { id, pin } })
      .pipe(
        map(result => {
          if (result && result.success) {
            const cliente = { type: CLIENTE_TYPE, ...result.body };
            this.cliente$.next(cliente);
            return cliente;
          } else {
            throw { type: CUSTOM_ERROR, name: 'account not found', message: `non è stato possibile trovare l'account` };
          }
        })
      );
  }

  getClienteByToken(token: string): Observable<Cliente | CustomError> {
    // se già presente nello store non riscarica i dati del cliente:
    if (this.cliente$.value.id) {
      return this.cliente$;
    }

    if (!token) {
      return throwError(new WrongParamError(token));
    }

    return this.httpClient
      .get<ApiResponse<Cliente>>('/api/clienti', { params: { token } })
      .pipe(
        map(result => {
          if (result && result.success) {
            const cliente = { type: CLIENTE_TYPE, ...result.body };
            this.cliente$.next(cliente);
            return cliente;
          } else {
            throw { type: CUSTOM_ERROR, name: 'account not found', message: `non è stato possibile trovare l'account` };
          }
        })
      );
  }
}
