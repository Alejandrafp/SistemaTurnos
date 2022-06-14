import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket } from '../models/tickets.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private url = `${environment.SOCKET_ENDPOINT}api/tickets`

  constructor(private httpClient: HttpClient) {
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



}
