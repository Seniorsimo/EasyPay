import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
    this.setPage(this.page - 1);
  }

  nextPage() {
    this.setPage(this.page + 1);
  }

  private setPage(pg: number) {
    if (pg < 0) {
      this.page = 0;
    } else if (pg > this.maxPage ) {
      this.page = this.maxPage;
    } else {
      this.page = pg;
    }
    this.changePage.emit(this.page);
  }

}
