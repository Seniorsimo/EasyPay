import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { CoreModule } from '../core/core.module';
import { BigButtonComponent } from './components/big-button/big-button.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ErrorComponent } from './components/error/error.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { NfcComponent } from './components/nfc/nfc.component';
import { PinComponent } from './components/pin/pin.component';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { NumericDirective } from './directives/numeric.directive';
import { BannerComponent } from './components/banner/banner.component';
import { RecognitionComponent } from './components/recognition/recognition.component';
import { MinPipe } from './pipes/min.pipe';
import { SwitchNumberPipe } from './pipes/switch-number.pipe';

@NgModule({
  declarations: [
    QrCodeComponent,
    NfcComponent,
    PinComponent,
    NumericDirective,
    LoaderComponent,
    ErrorPageComponent,
    ErrorComponent,
    LoginComponent,
    BigButtonComponent,
    BannerComponent,
    RecognitionComponent,
    MinPipe,
    SwitchNumberPipe,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    MatGridListModule,
  ],
  exports: [
    LoaderComponent,
    ErrorComponent,
    LoginComponent,
    BigButtonComponent,
    MatGridListModule,
    BannerComponent,
    RecognitionComponent,
    MinPipe,
    SwitchNumberPipe,
  ],
})
export class SharedModule {}
