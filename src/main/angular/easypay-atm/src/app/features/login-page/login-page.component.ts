import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public breakpoint: number;
  public  maxCol = 6;
  public  minCol = 2;

  private deviceSize = 850;

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
  }

  clickInfo() {
    console.warn('not yet implement');
  }

  randomColor(): string {
    // return 'white';
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }


onResize(event) {
  this.breakpoint = (event.target.innerWidth <= this.deviceSize) ? this.minCol : this.maxCol;
}

}
