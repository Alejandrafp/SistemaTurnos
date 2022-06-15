import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket } from '../models/tickets.interface';
import { SocketioService } from './socketio.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private url = `${environment.SOCKET_ENDPOINT}api/tickets`
  tickets: Ticket[] = [];

  get turnoActual() {
    return this.socketService.turnoActual;
  }

  

  constructor(private httpClient: HttpClient, private socketService: SocketioService) {
   }

   get user() {
    return localStorage.getItem("id") === "";
  }
  set user(val: boolean) {
    if (val) {
      localStorage.setItem("logged", "true");
    } else {
      localStorage.removeItem("logged");
    }
  }

  public setupSocket(): void 
  {
    this.socketService.setupSocketConnection();
  }
  
  public siguienteTurnoCaja()
  {
    //Se solicita cambio de turno
    this.socketService.siguienteTurnoCaja();
  }

  public siguienteTurnoServ()
  {
    //Se solicita cambio de turno
    this.socketService.siguienteTurnoServ();
  }


  disconnect() {
   this.socketService.disconnect();
}


  public create(ticket : Ticket): Observable<Ticket> 
  {
  return this.httpClient.post<Ticket>(this.url, ticket);
  };

  public get(): Observable<Ticket[]> 
  {
    return this.httpClient.get<Ticket[]>(this.url);
  }

  public update(ticket : Ticket): Observable<Ticket> 
  {
    return this.httpClient.put<Ticket>(this.url+ticket.id, ticket);
  };

  public deleteAll(): Observable<Ticket> 
  {
    return this.httpClient.delete<Ticket>(this.url);
  };



}
