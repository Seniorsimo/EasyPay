import { Component, OnInit, Input } from '@angular/core';
import { CustomError } from 'src/app/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  /** titolo della pagina di errore */
  @Input() titleLabel: string;

  /** contenuto html del messaggio di errore */
  @Input() content: string;

  /** oggetto errore da stampare se presente */
  @Input() error: CustomError;

  constructor() { }

  ngOnInit() {
  }

}
