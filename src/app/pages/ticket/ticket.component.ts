import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/tickets.interface';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls:[
    './ticket.component.css'
  ]
})
export class TicketComponent implements OnInit {

  atencionFormControl = new FormControl("",Validators.required);
  tramiteFormControl = new FormControl("",Validators.required);

  imprimir(){
    console.log("Atencion",this.atencionFormControl,"Tramite",this.tramiteFormControl)
  }

  constructor(private ticketService: TicketsService, private router: Router) { }

  get identidadSaved(): string {
    return localStorage.getItem('identidad')?.toString() ?? "";
  }

  createTicket() {
    var ticket: Ticket = {
      identidad: this.identidadSaved,
      estado: 0,
      tramite: parseInt(this.tramiteFormControl.value),
      atencion: parseInt(this.atencionFormControl.value),
      ticket: ""
    }

    this.ticketService.create(ticket).subscribe(resp => {localStorage.setItem("ticket", JSON.stringify(resp))
      this.router.navigate(["/salaespera"]);
    }
    
    );

  }

  formValid(){
    return (!this.atencionFormControl.valid ||
    !this.tramiteFormControl.valid)
  }

  ngOnInit(): void { 
      // this.ticketService.create({
    //   identidad: "0002130123",
    //   estado: 0,
    //   tramite: this.tramite.Caja,
    //   atencion: 0,
    //   ticket: ""
    // }).subscribe(console.log); 
  }

  

}
