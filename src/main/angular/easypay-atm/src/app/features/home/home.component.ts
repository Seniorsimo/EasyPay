import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/core';
import { UserType } from 'src/app/core/constants/user-type.enum';
import { RoutingService } from 'src/app/core/services/routing.service';
import { SelfStore } from 'src/app/core/store/self.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly buttonWidth = '400px';
  readonly buttonHeight = '250px';

  constructor(private routingService: RoutingService, private selfStore: SelfStore, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.routingService.updateHeader('Home');
    if (!this.selfStore.id) {
      this.clienteService.getSelfClient().subscribe(cliente => {
        if (cliente) {
          this.selfStore.update(cliente);
        }
      });
    }

  }

  gotoPayment() {
    this.routingService.gotoPayment();
  }

  gotoRecharge() {
    this.routingService.gotoRecharge();
  }

  gotoMovements() {

  }

}
