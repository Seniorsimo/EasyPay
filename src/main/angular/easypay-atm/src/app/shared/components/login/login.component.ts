import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "src/app/features/login-page/services/login.service";
import { Router } from "@angular/router";
import { RoutersPath } from 'src/app/core';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  /** controller del form */
  formCrl: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.formCrl = this.fb.group({
      username: this.fb.control("", [Validators.required]),
      password: this.fb.control("", [
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
}
