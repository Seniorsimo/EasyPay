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


  constructor(private routingService: RoutingService, public selfStore: SelfStore, private clienteService: ClienteService) { }

  ngOnInit(): void {
    if (!this.selfStore.id) {
      this.clienteService.getSelfClient().subscribe(cliente => {
        if (cliente) {
          this.selfStore.update(cliente);
        }
      });
    }
  }

  ngAfterViewInit() {
    this.routingService.updateHeader('Pagamento');
  }
}
