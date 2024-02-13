import { Injectable } from '@angular/core';
import { User, UserForLogin } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

authUser(user: UserForLogin){
  console.log(user);
  return this.http.post('https://localhost:7232/api/account/login', user);
}
}
