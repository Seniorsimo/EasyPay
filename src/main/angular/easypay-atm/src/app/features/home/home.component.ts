import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly buttonWidth = '400px';
  readonly buttonHeight = '250px';

  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
    this.routingService.updateHeader('Home');
  }

  gotoPayment() {
    this.routingService.gotoPayment();
  }

  gotoMovements() {

  }

}
