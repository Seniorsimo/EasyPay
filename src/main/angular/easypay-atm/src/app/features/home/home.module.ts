import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from 'src/app/shared';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatGridListModule, SharedModule],
  exports: [HomeComponent]
})
export class HomeModule {}
