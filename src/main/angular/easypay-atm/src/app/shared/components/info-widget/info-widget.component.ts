import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-widget',
  templateUrl: './info-widget.component.html',
  styleUrls: ['./info-widget.component.scss']
})
export class InfoWidgetComponent implements OnInit {

  /** titolo della sezione */
  @Input() title: string;
  /** numero del conto */
  @Input() numConto: string;
  /** nome del proprietario conto */
  @Input() name: string;
  /** regione sociale */
  @Input() regSocial: string;
  /** indirizzo del proprietario del conto */
  @Input() address: string;

  constructor() { }

  ngOnInit(): void {
  }

}
