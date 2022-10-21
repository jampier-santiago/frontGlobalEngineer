import { Component } from '@angular/core';

// --- Services ---
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private _user: string;
  private _password: string;

  public errorPassword: string;
  public errorUser: string;

  catchUser(user: string) {
    if (user) {
      this._user = user;

      if (this._password && user) {
        const response = this._homeService.validateUser(user, this._password);

        if (response) {
          this.errorPassword = response;
          this.errorUser = response;
        }
      }
    } else {
      this.errorUser = 'Este campo es obligatorio';
    }
  }

  catchPassword(password: string) {
    if (password) {
      console.log(password);
      this._password = password;

      if (this._user && password) {
        const response = this._homeService.validateUser(this._user, password);

        if (response) {
          this.errorPassword = response;
          this.errorUser = response;
        }
      }
    } else {
      this.errorPassword = 'Este campo es obligatorio';
    }
  }

  constructor(private _homeService: HomeService) {
    this._user = '';
    this._password = '';

    this.errorPassword = '';
    this.errorUser = '';
  }
}
