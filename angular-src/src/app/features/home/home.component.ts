import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import {
  Commerciante,
  COMMERCIANTE_TYPE,
  CommercianteService,
  LoaderService,
  LoadingStatus,
  PrezzoService,
} from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly LoadingStatus =  LoadingStatus;

  /** dati sull' errore ottenuto cercando di recuperare le informazioni */
  error$: BehaviorSubject<CursorError> = new BehaviorSubject(undefined);

  statusLoader$: BehaviorSubject<LoadingStatus>;

  prezzo$: BehaviorSubject<number>;

  contoCommerciante$: BehaviorSubject<Commerciante>;

  constructor(
    private route: ActivatedRoute,
    private commercianteService: CommercianteService,
    private prezzoService: PrezzoService,
    private loaderService: LoaderService,
  ) {
    this.statusLoader$ = this.loaderService.status$;
  }

  /*
   * idConto: id del commerciante
   * prezzo: prezzo da pagare
   */
  ngOnInit() {
    this.contoCommerciante$ = this.commercianteService.contoCommerciante$;
    this.prezzo$ = this.prezzoService.prezzo$;

    this.route.queryParams
      .pipe(
        // debounceTime evita l'emit iniziale prima che i param siano effettivamente inizializzati
        debounceTime(200),
        switchMap(params => {
          this.prezzoService.setPrezzo(params.prezzo);
          return this.commercianteService.getConto(params.idConto);
        })
      )
      .subscribe({
        next:  result => {
          if (result.type === COMMERCIANTE_TYPE) {
            this.loaderService.changeStatus(LoadingStatus.SUCCESS);
          }
        },
        error: error => {
          this.error$.next(error);
          this.loaderService.changeStatus(LoadingStatus.FAILED);
        },
      });
  }
}
