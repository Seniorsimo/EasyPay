import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutersPath } from './core';
import { AuthGuard } from './core/guards/auth-guard.service';
import { NoLoginGuard } from './core/guards/no-login-guard.service';
import { HomeComponent } from './features/home/home.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { MovementsComponent } from './features/movements/movements.component';
import { PaymentsComponent } from './features/payments/payments.component';
import { RechargeComponent } from './features/recharge/recharge.component';
import { TemplateComponent } from './features/template/template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: RoutersPath.base,
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: RoutersPath.home,
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: RoutersPath.login,
        component: LoginPageComponent,
        canActivate: [NoLoginGuard],
      },
      {
        path: RoutersPath.payment,
        component: PaymentsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: RoutersPath.recharge,
        component: RechargeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: RoutersPath.movements,
        component: MovementsComponent,
        canActivate: [AuthGuard],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
