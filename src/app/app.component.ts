import { Component, enableProdMode } from '@angular/core';
import { HttpService } from './_helper/http.service';
import { ComService } from './_helper/com.service';

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

  constructor(public _app: ComService) {
    _app.appbean$.subscribe(x => {
      this._shownav = _app.isMenuBar();
      if (x.t1 !== null && x.t1 == "app-msg") {
        this._msg.msg = x.t3;
        let snackbar = document.getElementById("snackbar");
        snackbar.className = "show " + x.t2;
        setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
      } else if (x.t1 == "logged-in") {
        this._shownav = true;
      }
    });
  }
}
