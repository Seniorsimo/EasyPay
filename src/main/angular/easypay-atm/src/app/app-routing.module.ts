import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { TemplateComponent } from './features/template/template.component';
import { AuthGuard } from './core/guards/auth-guard.service';
import { NoLoginGuard } from './core/guards/no-login-guard.service';
import { PaymentsComponent } from './features/payments/payments.component';
import { RoutersPath } from './core';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
