import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Cliente } from '../models/cliente.model';
import { UserType } from '../constants/user-type.enum';
import { SelfStore } from '../store/self.store';
import { ApiRoute } from '../constants/routing.constants';
import { Conto } from '../models/conto.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient, private selfStore: SelfStore) {
  }

  getClienteByPin(id: string, pin: string): Observable<Cliente>  {
    const params: {pin: string} =  { pin } ;
    return this._getClient(id, params);
  }

  getClienteByTokenOtp(otp: string): Observable<Cliente> {
    const id = '0'; // TODO: ottenere l'id dall' OTP
    const params: {otp: string} = { otp };
    return this._getClient(id, params);
  }

  /** restituisce  */
  getSelfClient(): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${ApiRoute.clienti}/self`).pipe(
      map(result => {
        return (result) ? { type: UserType.customer, ...result } : null;
      })
    );
  }

  getSelfConto(): Observable<Conto> {
    return this.httpClient.get<Conto>(`${ApiRoute.conti}/self`);
  }


  // getConto(idConto: string): Observable<Commerciante> {
  //   // se già presente nello store non riscarica i dati del cliente:
  //   if (this.contoCommerciante$.value.idConto) {
  //     return this.contoCommerciante$;
  //   }

  //   // if (!idConto) {
  //   //   return of(new WrongParamError(idConto));
  //   // }

  //   return this.httpClient
  //     .get<Conto>(`/api/commercianti/${idConto}`)
  //     .pipe(
  //       map(result => {
  //           const commerciante = { type: COMMERCIANTE_TYPE, ...result };
  //           this.contoCommerciante$.next(commerciante);
  //           return commerciante;
  //       }),
  //       catchError(error => {
  //         throw error;
  //       })
  //     );
  // }

  /** effettua la richiesta HTTP per verificare se il login del cliente va a buon fine */
  private _getClient(id: string, params: {pin?: string; otp?: string}): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${ApiRoute.clienti}/${id}`, {params}).pipe(
        map(result => ({ type: UserType.customer, ...result })),
        // workaround per adattare la struttura cliente con quella ricevuta dal server
        map((cliente: any) => ({...cliente, idConto: cliente.id_conto})),
        catchError(error => { throw(error); })
      );
  }
}
