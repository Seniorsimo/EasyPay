import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Commerciante, COMMERCIANTE_TYPE } from 'src/app/core/models/commerciante.model';

import { CommercianteService, PrezzoService, LoaderService, LoadingStatus } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  statusLoader$: BehaviorSubject<LoadingStatus>;

  constructor(
    public loaderService: LoaderService,
  ) {
    this.statusLoader$ = this.loaderService.status$;
  }

  ngOnInit() {
  }
}
