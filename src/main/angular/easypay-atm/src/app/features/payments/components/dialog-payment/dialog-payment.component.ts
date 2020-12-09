import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente, MovimentoService } from 'src/app/core';
import { RoutingService } from 'src/app/core/services/routing.service';
import { SelfStore } from 'src/app/core/store/self.store';

import { DialogData } from '../../payments.component';

@Component({
  selector: 'app-dialog-payment',
  templateUrl: './dialog-payment.component.html',
  styleUrls: ['./dialog-payment.component.scss']
})
export class DialogPaymentComponent {


  public cliente: Cliente;
  public priceInfo: DialogData['priceInfo'];

  constructor(
    private dialogRef: MatDialogRef<DialogPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private movimentoService: MovimentoService,
    private selfStore: SelfStore,
    private routingService: RoutingService,
    private snackBar: MatSnackBar,
  ) {
    this.cliente = data.cliente;
    this.priceInfo = data.priceInfo;
  }

  completePayment() {
    this.movimentoService
      .pay(this.cliente.idConto, this.selfStore.idConto, this.priceInfo.price)
      .subscribe(() => {
        // pagamento avvenuto con successo
        this.openSnackBar('pagamento effettuato con successo', 'success');
      },
      (error) => {
        // errore nel pagamento
        this.openSnackBar('pagamento fallito', 'failure');
        console.error(error);
      },
      // complete
      () => {
        this.dialogRef.close();
        this.routingService.gotoHome();
      });
  }

  undo() {
    this.dialogRef.close();
    window.location.reload();
  }

  private openSnackBar(message: string, cssClass?: string) {
    this.snackBar.open(message, 'chiudi', {
      // verticalPosition: MatSnackBarVerticalPosition,
      // horizontalPosition: MatSnackBarHorizontalPosition,
      panelClass: ['paytost', cssClass],
      duration: 10000,
    });
  }
}
