import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLogged: Boolean = false;
  userService: UserService = inject(UserService);

  login(username: string, password: string) {
    let user = this.userService.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user === undefined) {
      this.isLogged === false;
    }
    if (user) {
      this.isLogged = true;
    }
    return user;
  }

  logout() {
    this.isLogged = false;
  }

  isAuthenticated() {
    return this.isLogged;
  }
}
