import { Component, OnDestroy, OnInit } from '@angular/core';
import { AtencionType } from 'src/app/models/atencion';
import { EstadoType } from 'src/app/models/estado';
import { Ticket } from 'src/app/models/tickets.interface';
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
export class SeguimientoComponent implements OnInit  {
  
  public get turnoActual(){
    return this.ticketServ.turnoActual;
  }
  
  private tickets: Ticket[] = [];

  calculateDiff(dateTicket: Date, dateActual: Date, estado: number){
    let days: number = 0;
    if(estado === EstadoType.Espera) {
      let date = new Date(dateTicket);
     return days = Math.floor((dateActual.getTime() - date.getTime()) );
    }
    return 0;
  }

  public horaActual: any = new Date();

  public diffDate(created: Date): Date {
    return  new Date(this.horaActual.getTime()-created.getTime());
  }

  get ticketsArray() {
    return [...this.tickets];
  }
  constructor(private ticketServ: TicketsService){}
  
  ngOnInit(): void {
     setInterval(() => {         
      this.horaActual = new Date();
    }, 1000);
   this.ticketServ.get().subscribe(tickets => this.tickets = tickets );
  }

  siguienteTurnoCaja()
  {
    //Se solicita cambio de turno
    this.ticketServ.siguienteTurnoCaja();
    setTimeout(() => {    
      this.ticketServ.get().subscribe(tickets => this.tickets = tickets );
    }, 1000);
  }

  reiniciar() {
    this.ticketServ.deleteAll().subscribe(resp => {
      this.ticketServ.get().subscribe(tickets => this.tickets = tickets );
    });
  }
  siguienteTurnoServ()
  {
    //Se solicita cambio de turno
    this.ticketServ.siguienteTurnoServ();
    setTimeout(() => {    
      this.ticketServ.get().subscribe(tickets => this.tickets = tickets );
    }, 1000);
  }
  



  get tramite() {
    return TramiteType;
  }

  get atencion() {
    return AtencionType;
  }

  get estado() {
    return EstadoType;
  }
  
  
  

}
