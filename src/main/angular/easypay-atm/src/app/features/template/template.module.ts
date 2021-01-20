import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';

import { HomeModule } from '../home/home.module';
import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    HomeModule,
    RouterModule,
  ],
  exports: [TemplateComponent],
})
export class TemplateModule { }
