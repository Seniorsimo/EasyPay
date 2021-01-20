import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, CoreModule],
  exports: [HomeComponent]
})
export class HomeModule {}
