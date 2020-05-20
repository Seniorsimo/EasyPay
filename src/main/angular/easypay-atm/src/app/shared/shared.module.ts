import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { CoreModule } from '../core/core.module';
import { BannerComponent } from './components/banner/banner.component';
import { BigButtonComponent } from './components/big-button/big-button.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ErrorComponent } from './components/error/error.component';
import { InfoWidgetComponent } from './components/info-widget/info-widget.component';
import { JoinComponent } from './components/join/join.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { NfcComponent } from './components/nfc/nfc.component';
import { PinComponent } from './components/pin/pin.component';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { RecognitionComponent } from './components/recognition/recognition.component';
import { NumericDirective } from './directives/numeric.directive';
import { MinPipe } from './pipes/min.pipe';
import { SwitchNumberPipe } from './pipes/switch-number.pipe';
import { JoinPart1Component } from './components/join/parts/join-part1/join-part1.component';
import { JoinPart2Component } from './components/join/parts/join-part2/join-part2.component';
import { JoinPart3Component } from './components/join/parts/join-part3/join-part3.component';
import { JoinTranslateComponent } from './components/join/parts/join-translate/join-translate.component';
import { JoinDashboardComponent } from './components/join/parts/join-dashboard/join-dashboard.component';

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
    InfoWidgetComponent,
    JoinComponent,
    JoinPart1Component,
    JoinPart2Component,
    JoinPart3Component,
    JoinTranslateComponent,
    JoinDashboardComponent,
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
    MatSliderModule,
    MatRadioModule,
    MatDividerModule,
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
    InfoWidgetComponent,
    JoinComponent,
  ],
})
export class SharedModule {}
