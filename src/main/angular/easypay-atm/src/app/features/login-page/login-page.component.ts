import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public breakpoint: number;
  public  maxCol = 6;
  public  minCol = 2;

  private deviceSize = 850;

  constructor(private routingService: RoutingService ) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
    this.routingService.updateHeader('Login');
  }

  clickInfo() {
    console.warn('not yet implement');
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
  }

}
