import { Component } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  title = 'login';
  login: Login;

  constructor(private loginService: LoginService) {
    this.login = new Login();
  }

  userLogin() {
    console.log('login', this.login);
    let self = this;
    this.loginService.login(self.login.id, self.login.password).subscribe(data => {
      console.log(data);
    },
      error => {});
  }
}