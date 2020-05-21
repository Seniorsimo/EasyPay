import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { AbstractJoinPartComponent } from './parts/abstract-join-part/abstract-join-part.component';
import { JoinPart0Component } from './parts/join-part0/join-part0.component';
import { JoinPart1Component } from './parts/join-part1/join-part1.component';
import { JoinPart2Component } from './parts/join-part2/join-part2.component';
import { JoinPart3Component } from './parts/join-part3/join-part3.component';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent implements OnInit, OnDestroy, AfterViewInit {
  readonly  maxPage = 3;

  favoriteUserType: string;
  page: number;
  componentRef: ComponentRef<AbstractJoinPartComponent>;
  data = {};

  @ViewChild('adHost', { read: ViewContainerRef }) container;

  @Output() loginRequest = new EventEmitter<void>();

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.page = 0;
  }

  ngOnDestroy() {
    if (this.container) {
      this.container.clear();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadComponent();
    }, 0);
  }

  loadComponent() {

    this.container.clear();
    let factory: ComponentFactory<AbstractJoinPartComponent|JoinPart3Component>;
    switch (this.page) {
      case 3:
        factory = this.resolver.resolveComponentFactory(JoinPart3Component);
        break;
      case 2:
        factory = this.resolver.resolveComponentFactory(JoinPart2Component);
        break;
      case 1:
        factory = this.resolver.resolveComponentFactory(JoinPart1Component);
        break;
      case 0:
      default:
        factory = this.resolver.resolveComponentFactory(JoinPart0Component);
        break;
    }
    this.componentRef = this.container.createComponent(factory);
    if (this.page === this.maxPage) {
      (this.componentRef as unknown as ComponentRef<JoinPart3Component>).instance.data = this.data;
    }

  }

  login() {
    this.loginRequest.next();
  }




  updateForm(pg: number) {
    if (!this.componentRef.instance.validate()) {
      return;
    }
    // salva le informazioni recuperate dal form
    this.data = {...this.data, ...this.componentRef.instance.getValue()};

    this.setPage(pg);
    this.loadComponent();
  }

  setPage(pg: number) {
    if (pg < 0) {
      this.page = 0;
    } else if (pg > this.maxPage ) {
      this.page = this.maxPage;
    } else {
      this.page = pg;
    }
  }
}
