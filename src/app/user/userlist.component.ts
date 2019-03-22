import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComService } from '../_helper/com.service';
import { DataResource } from '../_shared/data.resource';
import { UserService } from './user.service'
import { User } from './user';
@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html'
})
export class UserListComponent {

  _title: string = 'User List';

  _userlist: any;
  _searchVal: string;

  constructor(private com: ComService, private _router: Router, private _data: DataResource, private _service: UserService) {
    if (!com.getRole() || com.getRole() == 0) {
      this._router.navigate(['/login']);
    }
    this._searchVal = '';
    this._userlist = [];
    this.getAll();
  }

  getAll() {
    let self = this;
    this._service.getAll(this._searchVal).subscribe(data => {
        self._userlist = data;
    });
  }

  getDept(did: any) {
    return this._data._deptList.find(x => x.key === did).value;
  }

  getRole(rid: any) {
    return this._data._roleList.find(x => x.key === rid).value;
  }

  goto(id: any) {
    this._router.navigate(['/user', id]);
  }


}