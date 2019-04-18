import { Injectable } from '@angular/core';
import { EventDispatcherService } from './event-dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private contador = 0;
  private cntChrt = 0;

  constructor(private eventDispatcher: EventDispatcherService) {}

  emitirNotificacao() {
    this.contador++;

    this.eventDispatcher.publish('notificacao', {
      title: 'Avaliar Prazo · ontem',
      info: `Projeto ${100 + this.contador}, Nova Funcionalidade`
    });
  }

  emitirAtualizacaoChart() {
    this.cntChrt++;
    this.eventDispatcher.publish('atualizacaoChart', {
      labels: ['lb1', 'lb2'],
      data: [1 + this.cntChrt, 1]
    });
  }
}
