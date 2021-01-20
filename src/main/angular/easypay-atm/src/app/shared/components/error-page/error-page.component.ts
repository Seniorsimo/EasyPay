import { Component, Input, OnInit } from '@angular/core';
import {LoaderService, LoadingStatus } from 'src/app/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  /** titolo della pagina di errore */
  titleLabel$: BehaviorSubject<string>;

  /** contenuto html del messaggio di errore */
  content$: BehaviorSubject<string>;

  /** oggetto errore da stampare se presente */
  error$: BehaviorSubject<any>;

  constructor(private route: ActivatedRoute, private loaderService: LoaderService) {
    this.titleLabel$ = new BehaviorSubject('Impossibile procedere con il pagamento. Se il problema persiste contattare il venditore');
    this.content$ = new BehaviorSubject('SUGGERIMENTO PER IL VENDITORE: assicurarsi che il idConto e prezzo siano validi');
    this.error$ = new BehaviorSubject(undefined);
    this.loaderService.status$.next(LoadingStatus.FAILED);
  }

  ngOnInit() {
    this.route.queryParams
    .pipe(
      // debounceTime evita l'emit iniziale prima che i param siano effettivamente inizializzati
      debounceTime(200),
      switchMap(params => {
        if ( params.titleLabel) {
          this.titleLabel$.next(params.titleLabel);
        }
        if ( params.content ) {
          this.content$.next(params.content);
        }
        if ( params.error ) {
          this.error$.next(JSON.parse(params.error));
        }
        return [];
      })
    )
    .subscribe();
  }
}
