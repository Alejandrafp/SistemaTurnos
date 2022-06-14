import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  turnoActual: string = "";
  socket!: Socket ;


  constructor() {   }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    // Solicitud de turno actual
    console.log(this.socket);
    this.socket.emit('turnoActual', this.turnoActual);
    // Se crea un socket que escuche cada cambio de turno actual 
    this.socket.on('turnoActual', (data: string) => {
      // TO DO eliminar console.log
      console.log(data);
      this.turnoActual = data;
    });
  }

  siguienteTurnoCaja()
  {
    //Se solicita cambio de turno
    this.socket.emit('siguienteTurnoCaja'); 
  }

  siguienteTurnoServ()
  {
    //Se solicita cambio de turno
    this.socket.emit('siguienteTurnoServ'); 
  }


  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
}

  
}
