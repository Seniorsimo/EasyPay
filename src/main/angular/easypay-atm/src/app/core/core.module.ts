import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { AuthGuard } from './guards/auth-guard.service';
import { NoLoginGuard } from './guards/no-login-guard.service';
import { httpInterceptorProviders } from './http-interceptors/auth.interceptor';
import { ClienteService } from './services/cliente.service';
import { LoaderService } from './services/loader.service';
import { LocalStorageService } from './services/local-storage.service';
import { RoutingService } from './services/routing.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, MatIconModule, FlexLayoutModule],
  exports: [MatIconModule, FlexLayoutModule],
  providers: [
    /* No providers */
  ]
})
export class CoreModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    // aggiunge le nuova svg a material
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('assets/svgs/mdi.svg')
    );
    // matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../../assets/fonts/materialdesignicons-webfont.woff'));
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ClienteService,
        RoutingService,
        AuthGuard,
        NoLoginGuard,
        LoaderService,
        LocalStorageService,
        httpInterceptorProviders,
      ]
    };
  }
}
