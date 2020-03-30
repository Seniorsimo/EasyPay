import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoutingService } from 'src/app/core/services/routing.service';
import { LoginStore } from '../login-page/store/login.store';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit, OnDestroy {

  public menuItems: { label: string, icon: string, clickEvent: () => void, isVisible: () => boolean }[] = [
    {
      label: 'Home',
      icon: 'more_vert',
      clickEvent: () => this.routingService.gotoHome(),
      isVisible: () => this.isLogin(),
    },
    {
      label: 'Ricarica',
      icon: 'publish',
      clickEvent: () => this.routingService.gotoReload(),
      isVisible: () => this.isLogin(),
    },
    {
      label: 'Pagamento',
      icon: 'euro',
      clickEvent: () => this.routingService.gotoPayment(),
      isVisible: () => this.isLogin(),
    },
    {
      label: 'Movimenti',
      icon: 'account_balance_wallet',
      clickEvent: () => this.routingService.gotoMovement(),
      isVisible: () => this.isLogin(),
    },
    {
      label: 'Logout',
      icon: 'lock',
      clickEvent: () => this.logout(),
      isVisible: () => this.isLogin(),
    },
  ];

  actSection = this.routingService.activeSection;

  private subscriptions: Subscription[] = [];

  constructor(public routingService: RoutingService, private loginStore: LoginStore) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.routingService.activeSection$.subscribe(activeSection =>
        setTimeout(() => (this.actSection = activeSection), 0)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


  isLogin(): boolean {
    return !!this.loginStore.token;
  }

  logout() {
    this.loginStore.token = undefined;
    this.routingService.gotoLogin();
  }

  menuDisabled(): boolean {
    return !this.menuItems.some((item) => item.isVisible());
  }
}
