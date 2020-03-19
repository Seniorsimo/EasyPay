import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.scss']
})
export class BigButtonComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  @Input() width: string;
  @Input() height: string;

  get iconSize(): string {
    return  (parseInt(this.width, 10) / 3) + 'px';
  }

  @Output() clickEmitter: EventEmitter<void> = new  EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(): void {
    this.clickEmitter.next();
  }
}
