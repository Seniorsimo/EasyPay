import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiRoute } from '../constants/routing.constants';

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {

  constructor(private http: HttpClient) { }


  /** effettua un movimento di pagamento sul cliente */
  pay(idCliente: string, idCommerciante: string, prezzo: string) {
    const params = {
      from: idCliente,
      to: idCommerciante,
      value: prezzo,
    };
    return this.http.post<{ success: boolean; error?: { id: string; message: string } }>(ApiRoute.pagamenti, params).pipe(
      map(result => {
        console.error('TODO: gestire la risposta del pagamento');
      })
    );
  }

  /** effettua un movimento di caricamento sul cliente */
  recharge(idCliente: string, idCommerciante: string, prezzo: string) {
    const params = {
      from: idCommerciante,
      to: idCliente,
      value: prezzo,
    };
    return this.http.post<{ success: boolean; error?: { id: string; message: string } }>(ApiRoute.ricariche, params).pipe(
      map(result => {
        console.error('TODO: gestire la risposta del pagamento');
      })
    );
  }
}
