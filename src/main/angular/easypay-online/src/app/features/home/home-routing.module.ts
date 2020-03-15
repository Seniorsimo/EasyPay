import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NfcComponent, PinComponent, QrCodeComponent } from '../../shared';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'pin',
        pathMatch: 'full'
      },
      {
        path: 'pin',
        component: PinComponent
      },
      {
        path: 'qr',
        component: QrCodeComponent
      },
      {
        path: 'nfc',
        component: NfcComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
