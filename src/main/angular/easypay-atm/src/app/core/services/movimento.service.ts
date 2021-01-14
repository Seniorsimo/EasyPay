import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiRoute } from '../constants/routing.constants';
import { Conto } from '../../shared/models/conto.model';

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {

  constructor(private http: HttpClient) { }


  /** effettua un movimento di pagamento sul idContoCliente */
  pagamento(idContoCliente: string, idContoCommerciante: string, prezzo: string) {
    const params = {
      from: idContoCliente,
      to: idContoCommerciante,
      value: prezzo,
    };
    return this.http.post<{ success: boolean; error?: { id: string; message: string } }>(ApiRoute.pagamenti, params).pipe(
      map(result => {
        console.error('TODO: gestire la risposta del pagamento');
      })
    );
  }

  /** effettua un movimento di caricamento sul cliente indicato da idCliente */
  ricarica(idContoCliente: string, idContoCommerciante: string, prezzo: string) {
    const params = {
      from: idContoCommerciante,
      to: idContoCliente,
      value: prezzo,
    };
    return this.http.post<{ success: boolean; error?: { id: string; message: string } }>(ApiRoute.ricariche, params).pipe(
      map(result => {
        console.error('TODO: gestire la risposta del pagamento');
      })
    );
  }

  /** restituisce i movimenti del conto identificato */
  getMovimenti(idContoCliente: string): Observable<any[]> {
    return this.getConti(idContoCliente).pipe(
      map((conto: Conto) => {
        if (conto && conto.id) {
          return conto.movimenti;
        }
        return [];
      })
    );
  }

  getRicariche(idContoCliente: string) {
    return this.getConti(idContoCliente).pipe(
      map((conto: Conto) => {
        if (conto && conto.id) {
          return conto.entrate;
        }
        return [];
      })
    );
  }

  getPagamenti(idContoCliente: string) {
    return this.getConti(idContoCliente).pipe(
      map((conto: Conto) => {
        if (conto && conto.id) {
          return conto.uscite;
        }
        return [];
      })
    );
  }

  /** workaround per ottenere le liste dei movimenti che sono state posizionate sul conto */
  private getConti(idContoCliente: string): Observable<Conto> {
    return this.http.get<Conto>(`${ApiRoute.conti}/${idContoCliente}`);
  }
}
