import { Injectable } from '@angular/core';
import { HttpService } from '../_helper/http.service';
import { Login } from './login';
@Injectable()
export class LoginService {

    constructor(private http: HttpService) {
    }

    login(data: Login) {
        return this.http.post('user/login', data);
    }
}
