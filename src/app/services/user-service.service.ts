import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }
  addUser(user: User){
    let users: User[] = [];
    const storedUsers = localStorage.getItem('Users');
    if (storedUsers) {
      users = JSON.parse(storedUsers);
      if (!Array.isArray(users)) {
        console.error('Stored users is not an array:', users);
        return;
      }
      users = [...users, user];
    } else {
      users.push(user);
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
