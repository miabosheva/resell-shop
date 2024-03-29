import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';
import { Router } from '@angular/router';
import { UserForLogin } from '../../model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    this.authService.authUser(loginForm.value).subscribe(
      (response: any) => {
        console.log(response);
        const user = response;
        localStorage.setItem('token', user.token);
        localStorage.setItem('username', user.userName);
        this.alertify.success("Welcome back " + user.userName);
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.alertify.error(error.error);
      }
    );
    // if (token) {
    //   localStorage.setItem('token', token.userName);
    //   this.alertify.success("Welcome back " + token.userName);
    //   this.router.navigate(['/']);
    // } else {
    //   this.alertify.error("Log In Failed");
    // }
  }

}
