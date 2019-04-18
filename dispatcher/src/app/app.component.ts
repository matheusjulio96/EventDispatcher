import { Component, OnInit } from '@angular/core';
import { fade } from './animations';
import { SignalRService } from './_services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: fade
})
export class AppComponent implements OnInit {
  constructor(
    private signalRService: SignalRService
  ) {}

  emitirNotificacao() {
    this.signalRService.emitirNotificacao();
  }

  emitirAttChart() {
    this.signalRService.emitirAtualizacaoChart();
  }

  ngOnInit() {

  }

}
