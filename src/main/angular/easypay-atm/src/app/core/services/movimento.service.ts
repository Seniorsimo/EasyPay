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
      idCommerciante,
      idCliente,
      prezzo: -prezzo,
    };
    return this.http.post<{ success: boolean; error?: { id: string; message: string } }>(ApiRoute.movimenti, params).pipe(
      map(result => {
        console.error('TODO: gestire la risposta del pagamento');
      })
    );
  }

  /** effettua un movimento di caricamento sul cliente */
  recharge(idCliente: string, idCommerciante: string, prezzo: string) {
    const params = {
      idCommerciante,
      idCliente,
      prezzo,
    };
    return this.http.post<{ success: boolean; error?: { id: string; message: string } }>(ApiRoute.movimenti, params).pipe(
      map(result => {
        console.error('TODO: gestire la risposta del pagamento');
      })
    );
  }
}
