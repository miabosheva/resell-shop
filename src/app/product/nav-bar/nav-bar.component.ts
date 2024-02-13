import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  loggedInUser: any | undefined;

  constructor() {}

  ngOnInit(): void {
  }

  loggedIn(){;
    this.loggedInUser = localStorage.getItem('username');
    // return localStorage.getItem('token');
    return this.loggedInUser;
  }

  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
}
