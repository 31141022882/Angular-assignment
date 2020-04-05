import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;
  callBackUrl: string;

  user: User[];
  constructor() {
    this.isLoggedIn = false;
    this.user = new Array<User>();
    const admin = new User();
    this.user.push(admin);
  }

  signUp(user: User) {
    // check for existence
    this.user.push(user);
  }

  login(username: string, password: string) {
    return this.user.find(x => x.firstName === username && x.lastName === password);
  }
}
