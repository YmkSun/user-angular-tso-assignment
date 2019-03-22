import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComService } from '../_helper/com.service';


@Component({
  selector: 'menu-header',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  _name = '';
  _logo: { name: string, link: string };
  _userid = 0;

  constructor(private _com: ComService, private _router: Router) {
    this._name = this._com._profile.username;
    this._logo = { name: 'User Management', link: '/user' };
    this._userid = this._com._profile.id;
  }

  goto() {
    this._router.navigate(['/user', this._com._profile.id]);
  }

}