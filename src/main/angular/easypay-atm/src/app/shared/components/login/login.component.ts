import { Component, OnInit } from '@angular/core';
import { LoginType } from '../../constants/login-type.enum';
import { RoutingService } from 'src/app/core/services/routing.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly LoginType = LoginType;
  public loginType = LoginType.pin;

  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
    this.routingService.updateHeader('Login');
  }

  changeLogin(choosenLoginType: LoginType) {
    this.loginType = choosenLoginType;
  }

}
