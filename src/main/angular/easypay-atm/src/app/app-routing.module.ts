import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { TemplateComponent } from './features/template/template.component';
import { AuthGuard } from './core/guards/auth-guard.service';
import { NoLoginGuard } from './core/guards/no-login-guard.service';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [NoLoginGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
