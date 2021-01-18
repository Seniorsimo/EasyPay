import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/core';

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

  @Input() data: any;

  status = StatusEnum.waiting;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.register(this.data)
    .subscribe({
      next: () => this.status = StatusEnum.success,
      error: () => this.status = StatusEnum.failed
    });
  }

}
