import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {



  public breakpoint: number;
  public  maxCol = 2;
  public  minCol = 1;

  private deviceSize = 1180;


  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
    this.routingService.updateHeader('Pagamento');
    this.breakpoint = (window.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
  }

  randomColor() {
    // return randomColor();
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
