import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';

enum FormTypes {
  login = 'Login',
  join = 'Join'
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  readonly FormTypes = FormTypes;


  public formType: FormTypes = FormTypes.login;

  constructor(private routingService: RoutingService ) { }

  ngOnInit(): void {
    this.routingService.updateHeader('Login');
  }

  clickInfo() {
    console.warn('not yet implement');
  }

  switchForm(formType: FormTypes) {
    this.formType = formType;
  }

}
