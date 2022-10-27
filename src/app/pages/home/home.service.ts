// -- Dependencies --
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// --- Interfaces ---
import { User } from './home.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _users: User[];

  validateUser(user: string, password: string): string | void {
    let userValid = false;

    this._users.forEach((dataUser) => {
      if (dataUser.name === user && dataUser.password === password) {
        userValid = true;
        return;
      }
    });

    if (userValid) {
      this.router.navigateByUrl('dashboard');
    } else {
      return 'Los datos no corresponden a un usuario registrado';
    }
  }

  constructor(private router: Router) {
    this._users = [
      { name: 'jampier', password: 'j1234' },
      { name: 'helen', password: 'h1234' },
    ];
  }
}
