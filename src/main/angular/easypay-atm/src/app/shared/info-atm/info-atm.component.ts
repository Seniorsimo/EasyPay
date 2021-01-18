import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-atm',
  templateUrl: './info-atm.component.html',
  styleUrls: ['./info-atm.component.scss']
})
export class InfoAtmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getATMCode(): string {
    return 'ATM_01246843fdg';
  }
}
