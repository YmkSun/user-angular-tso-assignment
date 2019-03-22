import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ComService } from '../_helper/com.service';
import { DataResource } from '../_shared/data.resource';
import { UserService } from './user.service'
import { User } from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {

  _title: string = 'User';

  _user: any;

  constructor(private com: ComService, private _router: Router, private _data: DataResource,
    private _service: UserService, private route: ActivatedRoute) {
    if (!com.getRole() || com.getRole() == 0) {
      this._router.navigate(['/login']);
    }
    this._user = new User();
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this._service.get(id).subscribe(data => {
        this._user = data;
      })
    }
  }

  save() {
    this._service.save(this._user).subscribe(data => {
      this._user = data;
      this._router.navigate(['/user']);
    });
  }

  update() {
    this._service.update(this._user).subscribe(data => {
      this._user = data;
    });
  }

  delete() {
    this._service.delete(this._user).subscribe(data => {
      this.clean();
    });
  }

  clean() {
    this._user = new User();
  }

}