import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, FlexLayoutModule],
  exports: [HomeComponent]
})
export class HomeModule {}
