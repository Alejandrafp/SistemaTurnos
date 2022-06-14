import { Component, OnDestroy, OnInit } from '@angular/core';
import { TramiteType } from 'src/app/models/tramite';
import { SocketioService } from 'src/app/services/socketio.service';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls:[
    './seguimiento.component.css'
  ]
})
export class SeguimientoComponent implements OnInit, OnDestroy {
  get turnoActual(){
    return this.socketService.turnoActual
  }

  get tramite() {
    return TramiteType;
  }
  
  
  constructor(private socketService: SocketioService, private ticketService: TicketsService) {}
  
  ngOnInit() {
    this.socketService.setupSocketConnection();
    // this.ticketService.create({
    //   identidad: "0002130123",
    //   estado: 0,
    //   tramite: this.tramite.Caja,
    //   atencion: 0,
    //   ticket: ""
    // }).subscribe(console.log);
    this.ticketService.get().subscribe(console.log)
    
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  siguienteCaja(){
    this.socketService.siguienteTurnoCaja();
  }
  siguienteServ(){
    this.socketService.siguienteTurnoServ();
  }

}
