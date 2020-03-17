import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { TemplateComponent } from './template.component';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HomeModule,
    RouterModule,
  ],
  exports: [TemplateComponent],
})
export class TemplateModule { }
