import { Component, OnInit } from '@angular/core';
import { EventDispatcherService } from '../../_services/event-dispatcher.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent implements OnInit {

  notificationList = [];

  constructor(
    private eventDispatcher: EventDispatcherService
  ) { }

  ngOnInit() {
    this.eventDispatcher.subscribe('notificacao', (notificacao) => {
      this.notificationList.push(notificacao);
    });
  }

}
