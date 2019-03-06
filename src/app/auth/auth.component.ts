import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
warn =false;
  constructor( private router:Router) { 
    
  }

  ngOnInit() {

  }
  login(){
      this.warn =!this.warn;
      this.router.navigate(["home"])
  }

}
