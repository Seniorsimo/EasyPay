import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-join-dashboard',
  templateUrl: './join-dashboard.component.html',
  styleUrls: ['./join-dashboard.component.scss']
})
export class JoinDashboardComponent implements OnInit {


  @Input() page: number;
  @Input() maxPage: number;

  @Output() changePage = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  backPage() {
    this.changePage.emit(this.page - 1);
  }

  nextPage() {
    this.changePage.emit(this.page + 1);
  }
}
