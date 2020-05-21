import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoute } from 'src/app/core';
import { map, catchError } from 'rxjs/operators';

enum StatusEnum {
  waiting = 'waiting',
  success = 'success',
  failed = 'failed',
}

@Component({
  selector: 'app-join-part3',
  templateUrl: './join-part3.component.html',
  styleUrls: ['./join-part3.component.scss']
})
export class JoinPart3Component implements OnInit {
  readonly StatusEnum = StatusEnum;

  @Input() data: object;

  status = StatusEnum.waiting;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post(ApiRoute.clienti, this.data).pipe(
      map(response => this.status = StatusEnum.success),
      catchError(error => this.status = StatusEnum.failed))
    .subscribe();
  }

}
