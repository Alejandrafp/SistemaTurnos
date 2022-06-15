import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    localStorage.setItem('identidad', this.id);
  }
  public id : string = '';
  // onRutas() {
    
  //   if(){
  //     return this.router.url.includes("/dashboard");
  //   }

// }

}
