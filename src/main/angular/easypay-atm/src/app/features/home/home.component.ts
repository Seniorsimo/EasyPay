import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly buttonWidth = '400px';
  readonly buttonHeight = '250px';

  constructor() { }

  ngOnInit(): void {
  }

  gotoPayment() {

  }

  gotoMovements() {

  }

}
