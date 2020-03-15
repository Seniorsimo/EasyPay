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

    const params: {id: string, pin: string} =  { id, pin } ;
    return this._getClient(params);
  }

  getClienteByToken(token: string): Observable<Cliente | CustomError> {
    // se già presente nello store non riscarica i dati del cliente:
    if (this.cliente$.value.id) {
      return this.cliente$;
    }

    if (!token) {
      return throwError(new WrongParamError(token));
    }

    const params: {token: string} = { token };
    return this._getClient(params);
  }

  /** effettua la richiesta HTTP per verificare se il login del cliente va a buon fine */
  private _getClient(params: {id?: string, pin?: string; token?: string}): Observable<Cliente | CustomError> {
    const formData = new FormData();
    formData.append('id', params.id);
    formData.append('pin', params.pin);
    formData.append('token', params.token);
    return this.httpClient
      .post<ApiResponse<Cliente>>('/api/clienti', formData)
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
