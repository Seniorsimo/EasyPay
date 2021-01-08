import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RoutersPath } from 'src/app/core';
import { LoginService } from 'src/app/features/login-page/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /** controller del form */
  formCrl: FormGroup;

  @Output() joinRequest = new EventEmitter<void>();

  private errorToastRef: MatSnackBarRef<TextOnlySnackBar> = null;

  private readonly toastConfig = {
    horizontalPosition: 'center' as MatSnackBarHorizontalPosition,
    verticalPosition: 'top' as MatSnackBarVerticalPosition,
    panelClass: 'toast-error',
  };

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.formCrl = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
    });
  }

  ngOnInit() {}

  login() {
    this.loginService
      .getToken(this.formCrl.value.email, this.formCrl.value.password)
      .subscribe(
        (token) => {
          if (this.errorToastRef) {
            this.errorToastRef.dismiss();
          }
          return this.router.navigate([RoutersPath.home], {});
        },
        (error: HttpErrorResponse) => {
          if (error && error.status) {
            if (error.status === 401) {
                this.errorToastRef = this.snackBar.open(
                'Dati per il login errati!',
                'Undo',
                this.toastConfig
              );
            }
          } else {
            console.error(error);
            this.snackBar.open(
              'Errore generico durante il login!',
              'Undo',
              this.toastConfig
            );
          }
        }
      );
  }

  join() {
    this.joinRequest.next();
  }
}
