import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutersPath } from 'src/app/core';
import { LoginService } from 'src/app/features/login-page/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /** controller del form */
  formCrl: FormGroup;

  @Output() joinRequest = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.formCrl = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16)
      ])
    });
  }

  ngOnInit() {}

  login() {
    this.loginService
      .getToken(this.formCrl.value.username, this.formCrl.value.password)
      .subscribe(token => this.router.navigate([RoutersPath.home], { }));
  }

  join() {
    this.joinRequest.next();
  }
}
