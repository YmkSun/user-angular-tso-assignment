import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComService } from '../_helper/com.service'
import { Login } from './login';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  _title = 'Login Form';
  _login: Login;

  constructor(private loginService: LoginService, private _com: ComService, private _router: Router) {
    this._login = new Login();
    this._com._profile.role = 0;
    this._com.sendBean({ t1: 'logged-out' });
  }

  userLogin() {

    let self = this;
    this.loginService.login(self._login).subscribe(data => {
      if (data) {
        this._com._profile = data;
        this._router.navigate(['/user', this._com._profile.id]);
        this._com.sendBean({ t1: 'logged-in' });
      }
    },
      error => { });

  }
}