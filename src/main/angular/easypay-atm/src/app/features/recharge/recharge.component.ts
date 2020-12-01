import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/core';
import { RoutingService } from 'src/app/core/services/routing.service';
import { SelfStore } from 'src/app/core/store/self.store';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit, AfterViewInit {

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
    this.routingService.updateHeader('Ricarica');
  }
}
