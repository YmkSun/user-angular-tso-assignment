import { Component } from '@angular/core';
import { ComService } from '../_helper/com.service';
import { DataResource } from '../_shared/data.resource';

@Component({
  selector: 'menu-header',
  templateUrl: './menu.component.html',
  styleUrls: ['css/menu.css']
})
export class MenuComponent {

  name = 'User';
  _logo: { name: string, link: string };

  constructor(private ics: ComService, private data: DataResource) {
    this.name = this.data._profileName;
    this._logo = { name: 'User Management', link: '/dashboard' };
  }

}