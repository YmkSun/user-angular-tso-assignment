import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComService } from '../_helper/com.service';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private com: ComService, private _router: Router) {
    if (!com.getRole() || com.getRole() == 0) {
        this._router.navigate(['/login']);
    }
  }

}