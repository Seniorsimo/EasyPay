import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin, Subject } from 'rxjs';
import { Cliente, ClienteService } from 'src/app/core';
import { RoutingService } from 'src/app/core/services/routing.service';
import { SelfStore } from 'src/app/core/store/self.store';
import { DialogRechargeComponent } from './components/dialog-recharge/dialog-recharge.component';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit, AfterViewInit {

  public a = new Subject<Cliente>();
  public b = new Subject<{ price: string; date: string; invoice: string }>();

  constructor(
    private routingService: RoutingService,
    public selfStore: SelfStore,
    private clienteService: ClienteService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    if (!this.selfStore.id) {
      this.clienteService.getSelfClient().subscribe((cliente) => {
        if (cliente) {
          this.selfStore.update(cliente);
        }
      });
    }
    this.completeRecharge();
  }

  ngAfterViewInit() {
    this.routingService.updateHeader('Ricarica');
  }

  authClientStatus(cliente: Cliente) {
    this.a.next(cliente);
    this.a.complete();
  }

  payStatus(status: { price: string; date: string; invoice: string }) {
    this.b.next(status);
    this.b.complete();
  }

  completeRecharge() {
    forkJoin({ cliente: this.a, priceInfo: this.b }).subscribe(
      ({ cliente, priceInfo }) => {
        this.dialog.open(DialogRechargeComponent, {
          data: { cliente, priceInfo },
          disableClose: true,
        });
      }
    );
  }
}
