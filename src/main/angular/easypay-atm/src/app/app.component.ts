import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingStatus, LoaderService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  statusLoader$: BehaviorSubject<LoadingStatus>;

  constructor(
    public loaderService: LoaderService,
  ) {
    this.statusLoader$ = this.loaderService.status$;
  }
}
