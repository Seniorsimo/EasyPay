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
import { UserType } from 'src/app/core/constants/user-type.enum';

import { AbstractJoinPartComponent } from './parts/abstract-join-part/abstract-join-part.component';
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
  userTypes: string[] = [UserType.customer, UserType.merchant];
  page: number;
  componentRef: ComponentRef<AbstractJoinPartComponent>;


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
    let factory: ComponentFactory<AbstractJoinPartComponent>;
    switch (this.page) {
      case 2:
        factory = this.resolver.resolveComponentFactory(JoinPart3Component);
        break;
      case 1:
        factory = this.resolver.resolveComponentFactory(JoinPart2Component);
        break;
      case 0:
      default:
        factory = this.resolver.resolveComponentFactory(JoinPart1Component);
        break;
    }
    this.componentRef = this.container.createComponent(factory);

  }

  login() {
    this.loginRequest.next();
  }


  setPage(pg: number) {
    if (!this.componentRef.instance.validate()) {
      return;
    }
    if (pg < 0) {
      this.page = 0;
    } else if (pg > this.maxPage ) {
      this.page = this.maxPage;
    } else {
      this.page = pg;
    }
  }
}
