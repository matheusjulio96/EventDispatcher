import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDispatcherService } from './_services/event-dispatcher.service';
import { SignalRService } from './_services/signal-r.service';
import { ChartComponent } from './components/chart/chart.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    NotificationBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    EventDispatcherService,
    SignalRService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
