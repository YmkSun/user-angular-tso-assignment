import { Component, enableProdMode, OnInit } from '@angular/core';
import { HttpService } from './_helper/http.service';
import { ComService } from './_helper/com.service';
import { DataResource } from './_shared/data.resource'

enableProdMode()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-angular-tso-assignment';
  _shownav: boolean;
  _msg = { msg: '' };

  constructor(private _app: ComService, private _http: HttpService, private _dataRes: DataResource) {
    _app.appbean$.subscribe(x => {
      this._shownav = _app.isMenuBar();
      if (x.t1 !== null && x.t1 == 'app-msg') {
        this._msg.msg = x.t3;
        let snackbar = document.getElementById('snackbar');
        snackbar.className = 'show ' + x.t2;
        setTimeout(function () { snackbar.className = snackbar.className.replace('show', ''); }, 3000);
      } else if (x.t1 == 'logged-in') {
        this._shownav = true;
      } else if (x.t1 == 'logged-out') {
        this._shownav = false;
      }
    });
  }

  ngOnInit() {
    this.getRoles();
    this.getDepts();
  }

  getRoles() {
    let self = this;
    this._http.get('base/roleList').subscribe(data => {
      self._dataRes._roleList = data;
    }, error => { });
  }

  getDepts() {
    let self = this;
    this._http.get('base/departments').subscribe(data => {
      self._dataRes._deptList = data;
    }, error => { });
  }

}
