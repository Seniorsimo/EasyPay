import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { BehaviorSubject } from 'rxjs';
import { Cliente, ClienteService } from 'src/app/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {

  /** standard accettati dal lettore */
  readonly allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13];
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;

  /**
   * scanner.
   * documentazione: https://github.com/zxing-js/ngx-scanner/wiki/Advanced-Usage
   */
  @ViewChild(ZXingScannerComponent)
  scanner: ZXingScannerComponent;

  @Output() clientAuthEvent = new EventEmitter<Cliente>();

  /** determina se è riuscito ad aprire o meno lo scanner */
  statusScanner$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private clienteService: ClienteService) { }

  ngOnInit() { }

  /** alla lettura dello stato prova ad effettuare il login */
  scanSuccessHandler(token: string) {
    this.scanner.enable = false;
    this.clienteService.getClienteByTokenOtp(token).subscribe(
      cliente => {
        console.warn(cliente);
        this.clientAuthEvent.emit(cliente)},
      error => this.scanner.enable = true);
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;

    if (this.availableDevices && this.availableDevices.length > 0) {
      this.currentDevice = this.availableDevices[0];
    }
  }

  /** modifica lo stato del reader, che indica se è in funzione o ha dei problemi in esecuzione */
  readerStatus(status: boolean) {
    this.statusScanner$.next(status);
  }
}
