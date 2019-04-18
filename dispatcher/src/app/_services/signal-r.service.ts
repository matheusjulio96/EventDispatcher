import { Injectable } from '@angular/core';
import { EventDispatcherService } from './event-dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private contador = 0;
  private cntChrt = 0;

  constructor() {}

  emitirNotificacao() {
    this.contador++;

    EventDispatcherService.publish('notificacao', {
      title: 'Avaliar Prazo · ontem',
      info: `Projeto ${100 + this.contador}, Nova Funcionalidade`
    });

    // while (this.contador <= 15000) {
    //   this.contador++;
    //   console.log(this.contador);

    //   this.eventDispatcher.publish('notificacao', {
    //     title: 'Avaliar Prazo · ontem',
    //     info: `Projeto ${100 + this.contador}, Nova Funcionalidade`
    //   });
    // }
  }

  emitirAtualizacaoChart() {
    this.cntChrt++;
    EventDispatcherService.publish('atualizacaoChart', {
      labels: ['lb1', 'lb2'],
      data: [1 + this.cntChrt, 1]
    });
  }
}
