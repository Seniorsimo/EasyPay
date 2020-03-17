import { Component, OnInit } from '@angular/core';
import { LoginType } from '../../constants/login-type.enum';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly LoginType = LoginType;
  public loginType = LoginType.pin;

  constructor() { }

  ngOnInit(): void {
  }

  changeLogin(choosenLoginType: LoginType) {
    this.loginType = choosenLoginType;
  }

}
