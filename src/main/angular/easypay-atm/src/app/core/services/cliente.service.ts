import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Cliente } from '../../shared/models/cliente.model';
import { UtenteType } from '../constants/utente-type.enum';
import { SelfStore } from '../store/self.store';
import { ApiRoute } from '../constants/routing.constants';
import { Conto } from '../../shared/models/conto.model';
import { ApiCliente } from '../api-models/api-cliente.model';
import { ApiConto } from '../api-models/api-conto.model';

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
    return this.httpClient.get<ApiCliente>(`${ApiRoute.clienti}/self`).pipe(
      map(apiCliente => ({
        type: UtenteType.cliente,
        ...apiCliente,
        id: apiCliente.id + '',
        idConto: apiCliente.id_conto + '',
        birthDate: apiCliente.birth_date,
      }))
    );
  }

  getSelfConto(): Observable<Conto> {
    return this.httpClient.get<ApiConto>(`${ApiRoute.conti}/self`).pipe(
      map(apiConto => ({...apiConto, id: apiConto.id + '', idCliente: apiConto.id_cliente + '' } as Conto)),
    );
  }

  /** effettua la richiesta HTTP per verificare se il login del cliente va a buon fine */
  private _getClient(id: string, params: {pin?: string; otp?: string}): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${ApiRoute.clienti}/${id}`, {params}).pipe(
        map(result => ({ type: UtenteType.cliente, ...result })),
        // workaround per adattare la struttura cliente con quella ricevuta dal server
        map((cliente: any) => ({...cliente, idConto: cliente.id_conto})),
        catchError(error => { throw(error); })
      );
  }
}
