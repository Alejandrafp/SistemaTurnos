import { Component } from '@angular/core';
import { TramiteType } from './models/tramite';
import { SocketioService } from './services/socketio.service';
import { TicketsService } from './services/tickets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminpro';
  constructor(private ticketService: TicketsService) {}
  
  ngOnInit() {
    this.ticketService.setupSocket();
  }
  
}
