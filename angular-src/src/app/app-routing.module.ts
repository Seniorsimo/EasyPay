import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PinComponent, QrCodeComponent, NfcComponent } from './shared';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'error',
        component: ErrorPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
