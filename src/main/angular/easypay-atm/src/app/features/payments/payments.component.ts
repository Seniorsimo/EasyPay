import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ClienteService } from 'src/app/core';
import { UserType } from 'src/app/core/constants/user-type.enum';
import { RoutingService } from 'src/app/core/services/routing.service';
import { SelfStore } from 'src/app/core/store/self.store';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit, AfterViewInit {



  public breakpoint: number;
  public  maxCol = 2;
  public  minCol = 1;

  private deviceSize = 1180;

  constructor(private routingService: RoutingService, public selfStore: SelfStore, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
    if (!this.selfStore.id) {
      this.clienteService.getSelfClient().subscribe(cliente => {
        if (cliente) {
          this.selfStore.id = cliente.id;
          this.selfStore.type = cliente.type;
          this.selfStore.nome = cliente.nome;
          this.selfStore.cognome = cliente.cognome;
          this.selfStore.cf = cliente.cf;
          this.selfStore.createdAt = cliente.createdAt;
          this.selfStore.updatedAt = cliente.updatedAt;
          this.selfStore.address = cliente.address;
          if (cliente.type === UserType.merchant) {
            this.selfStore.regSociale = cliente.regSociale;
            this.selfStore.pIva = cliente.pIva;
          }
        }
      });
    }
  }

  ngAfterViewInit() {
    this.routingService.updateHeader('Pagamento');
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
  }
}
