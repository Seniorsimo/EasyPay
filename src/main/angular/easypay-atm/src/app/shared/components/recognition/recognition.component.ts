import { Component, OnInit } from '@angular/core';
import { LoginType } from '../../constants/login-type.enum';
import { RoutingService } from 'src/app/core/services/routing.service';
import { LoginService } from 'src/app/features/login-page/services/login.service';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.scss']
})
export class RecognitionComponent implements OnInit {

  readonly LoginType = LoginType;
  public loginType = LoginType.pin;

  constructor(private routingService: RoutingService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.routingService.updateHeader('Login');
  }

  changeLogin(choosenLoginType: LoginType) {
    this.loginType = choosenLoginType;
  }
}
