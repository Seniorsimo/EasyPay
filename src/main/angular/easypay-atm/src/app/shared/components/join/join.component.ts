import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserType } from 'src/app/core/constants/user-type.enum';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent implements OnInit {
  readonly  maxPage = 3;

  favoriteUserType: string;
  userTypes: string[] = [UserType.customer, UserType.merchant];

  public page: number;

  @Output() loginRequest = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
    this.page = 0;
  }

  login() {
    this.loginRequest.next();
  }
}
