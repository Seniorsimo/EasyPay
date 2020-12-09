import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin, Subject } from 'rxjs';
import { Cliente, ClienteService } from 'src/app/core';
import { RoutingService } from 'src/app/core/services/routing.service';
import { SelfStore } from 'src/app/core/store/self.store';

import { DialogPaymentComponent } from './components/dialog-payment/dialog-payment.component';


export interface DialogData {
  cliente: Cliente;
  priceInfo: { price: string; date: string; invoice: string };
}


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit, AfterViewInit {
  public a = new Subject<Cliente>();
  public b = new Subject<{ price: string; date: string; invoice: string }>();

  constructor(
    private routingService: RoutingService,
    public selfStore: SelfStore,
    private clienteService: ClienteService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.selfStore.id) {
      this.clienteService.getSelfClient().subscribe((cliente) => {
        if (cliente) {
          this.selfStore.update(cliente);
        }
      });
    }
    this.completePayment();
  }

  ngAfterViewInit() {
    this.routingService.updateHeader('Pagamento');
  }

  authClientStatus(cliente: Cliente) {
    this.a.next(cliente);
    this.a.complete();
  }

  payStatus(status: { price: string; date: string; invoice: string }) {
    this.b.next(status);
    this.b.complete();
  }

  completePayment() {
    forkJoin({ cliente: this.a, priceInfo: this.b }).subscribe(
      ({ cliente, priceInfo }) => {
        this.dialog.open(DialogPaymentComponent, {
          data: { cliente, priceInfo },
          disableClose: true,
        });
      }
    );
  }
}
