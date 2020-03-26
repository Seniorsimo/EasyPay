import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit, OnDestroy {

  actSection = this.routingService.activeSection;

  private subscriptions: Subscription[] = [];

  constructor(public routingService: RoutingService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.routingService.activeSection$.subscribe(activeSection =>
        setTimeout(() => (this.actSection = activeSection), 0)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
