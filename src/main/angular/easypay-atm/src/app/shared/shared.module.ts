import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

import { CoreModule } from '../core/core.module';
import { BannerComponent } from './components/banner/banner.component';
import { BigButtonComponent } from './components/big-button/big-button.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ErrorComponent } from './components/error/error.component';
import { InfoWidgetComponent } from './components/info-widget/info-widget.component';
import { JoinComponent } from './components/join/join.component';
import { JoinDashboardComponent } from './components/join/parts/join-dashboard/join-dashboard.component';
import { JoinPart0Component } from './components/join/parts/join-part0/join-part0.component';
import { JoinPart1Component } from './components/join/parts/join-part1/join-part1.component';
import { JoinPart2Component } from './components/join/parts/join-part2/join-part2.component';
import { JoinPart3Component } from './components/join/parts/join-part3/join-part3.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { NfcComponent } from './components/nfc/nfc.component';
import { PinComponent } from './components/pin/pin.component';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { RecognitionComponent } from './components/recognition/recognition.component';
import { NumericDirective } from './directives/numeric.directive';
import { MinPipe } from './pipes/min.pipe';
import { SwitchNumberPipe } from './pipes/switch-number.pipe';
import { MatNativeDateModule } from '@angular/material/core';
import { PriceWidgetComponent } from './components/price-widget/price-widget.component';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';

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
    JoinPart0Component,
    JoinPart1Component,
    JoinPart2Component,
    JoinDashboardComponent,
    JoinPart3Component,
    PriceWidgetComponent,
    InfoDialogComponent,
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
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule,
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
    PriceWidgetComponent,
  ],
  entryComponents: [JoinPart0Component, JoinPart1Component, JoinPart2Component, JoinPart3Component, InfoDialogComponent],
})
export class SharedModule {}
