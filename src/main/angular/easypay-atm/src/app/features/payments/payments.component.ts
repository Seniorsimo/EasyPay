import { AfterViewInit, Component, OnInit } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { Cliente, ClienteService, MovimentoService } from 'src/app/core';
import { RoutingService } from 'src/app/core/services/routing.service';
import { SelfStore } from 'src/app/core/store/self.store';

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
    private movimentoService: MovimentoService
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
        this.movimentoService.pay(cliente.idConto, this.selfStore.idConto, priceInfo.price).subscribe(() => {
          console.error('TODO: messaggio di pagamento effettuato con successo');
        });
      }
    );
  }
}
