import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: any){
  let UserArray : User[] = [];
  if (localStorage.getItem('Users')){
    UserArray = JSON.parse(localStorage.getItem('Users')!);
  }
  return UserArray.find(p => p.email === user.email && p.password === user.password);
}
}
