import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { SeguimientoComponent } from './pages/Seguimiento/seguimiento.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { SalaesperaComponent } from './pages/salaespera/salaespera.component';


const routes: Routes = [
  {
    path: '',
     component: PagesComponent,
     children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'seguimiento', component: SeguimientoComponent},
      {path: 'ticket', component: TicketComponent},
      {path: 'salaespera', component: SalaesperaComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'grafica1', component: Grafica1Component},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

     ]
    },


  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: '**', component: NopagefoundComponent},


]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
