import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { ClienteService } from './services/cliente.service';
import { CommercianteService } from './services/commerciante.service';
import { PrezzoService } from './services/pagamento.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, MatIconModule],
  exports: [MatIconModule],
  providers: [/* No providers */],
})
export class CoreModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    // aggiunge le nuova svg a material
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svgs/mdi.svg'));
    // matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../../assets/fonts/materialdesignicons-webfont.woff'));
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CommercianteService,
        ClienteService,
        PrezzoService,
      ],
    };
  }
}
