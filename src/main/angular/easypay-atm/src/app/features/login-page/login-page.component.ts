import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoutingService } from 'src/app/core/services/routing.service';
import { InfoAtmComponent } from 'src/app/shared/info-atm/info-atm.component';

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

  constructor(private routingService: RoutingService, private dialog: MatDialog, ) { }

  ngOnInit(): void {
    this.routingService.updateHeader('Login');
  }

  clickInfo() {
    const dialogRef = this.dialog.open(InfoAtmComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  switchForm(formType: FormTypes) {
    this.formType = formType;
  }

}
