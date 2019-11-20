import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiRequest } from 'src/app/core/models/api.request';
import { ApiResponse } from 'src/app/core/models/api.response';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { CommercianteService } from 'src/app/core/services/commerciante.service';

import { CUSTOM_ERROR, CustomError } from '../models/error.model';

@Injectable({
  providedIn: 'root'
})
export class PrezzoService {
  prezzo$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    private http: HttpClient,
    private commercianteService: CommercianteService,
    private clienteService: ClienteService,
    private router: Router
  ) {}
  /** Salva il valore del trasferimento da effettuare */
  setPrezzo(value: string) {
    const convPrezzo = Number.parseFloat(value);
    if (!isNaN(convPrezzo)) {
      this.prezzo$.next(Number.parseFloat(value));
    } else {
      throw { type: CUSTOM_ERROR, name: 'errore sul prezzo', message: 'deve essere un valore numerico' };
    }
  }

  /** gestisce un pagamento una volta che gli store sono stati tutti inizializzati correttamente */
  handlePagamento() {
    this.pagamento(
      this.commercianteService.contoCommerciante$.value.idConto,
      this.clienteService.cliente$.value.id,
      this.prezzo$.value
    ).subscribe(result => {
      if (result.success) {
        if (window.opener) {
          window.opener.postMessage('Success', '*');
          window.close();
        } else {
          console.error('Impossibile chiudere pagina');
        }
        // TODO: riprendere da qui con la gestione dell' esito del pagamento
        // TODO: redirect per il successo durante il pagamento

        //
      } else {
        const titleLabel = 'Impossibile procedere con il pagamento';
        const message = 'Ricaricare il conto';
        const error: CustomError = { type: CUSTOM_ERROR, name: result.error.id, message: result.error.message };
        this.router.navigateByUrl(`/error?titleLabel=${titleLabel}&content=${message}&error=${JSON.stringify(error)}`);
      }
    });
  }

  /** effettua il pagamento e da un esito dell' operazione  */
  pagamento(idCommerciante: string, idCliente: string, prezzo: number) {
    const params: ApiRequest<any> = {
      payload: {
        idCommerciante,
        idCliente,
        prezzo
      }
    };
    return this.http.post<ApiResponse<{ success: boolean; error?: { id: string; message: string } }>>('/api/pagamento', params);
  }
}
