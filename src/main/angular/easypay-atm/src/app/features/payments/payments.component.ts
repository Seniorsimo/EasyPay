import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';


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


  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
  }

  ngAfterViewInit() {
    this.routingService.updateHeader('Pagamento');
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
  }
}
