import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { asyncScheduler, forkJoin, scheduled, Subject } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';
import { Cliente, ClienteService } from 'src/app/core';
import { UserType } from 'src/app/core/constants/user-type.enum';
import { Conto } from 'src/app/core/models/conto.model';
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
    if (!this.selfStore.email || !this.selfStore.budget) {
      scheduled([
        this.clienteService.getSelfClient(),
        this.clienteService.getSelfConto(),
      ], asyncScheduler).pipe(
        mergeAll(),
        map((element) => {
          if (this.isSelfCliente(element)) {
            this.selfStore.updateCliente(element as Cliente);
          } else if (this.isSelfConto(element)) {
            this.selfStore.updateConto(element as Conto);
          }
        })
      )
      .subscribe(() => this.handleCustomerPermission());
    } else {
      this.handleCustomerPermission();
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

  /** verifica che il cliente sia un mercante */
  isMercant(): boolean {
    return this.selfStore.type === UserType.merchant;
  }


  /**
   * verifica che il login abbia restituito un commerciante, altrimenti blocca l'atm chiedendo un upgrade
   */
  private handleCustomerPermission() {
    if (!this.isMercant()) {
      this.routingService.gotoHome();
    }
  }

  /** verifica se l'oggetto passato è un cliente */
  private isSelfCliente(cliente): boolean {
    return cliente && cliente.email;
  }

  /** verifica se l'oggetto passato è un conto */
  private isSelfConto(conto): boolean {
    return conto && conto.budget;
  }
}
