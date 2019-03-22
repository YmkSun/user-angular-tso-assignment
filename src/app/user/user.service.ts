import { Injectable } from '@angular/core';
import { HttpService } from '../_helper/http.service';
import { ComService } from '../_helper/com.service'
import { User } from './user';
@Injectable()
export class UserService {

    _atuhValue: any;

    constructor(private http: HttpService, private com: ComService) {
        this._atuhValue = 'auth=' + this.com._profile.auth + '&uid=' + this.com._profile.id;
    }

    get(id: any) {
        return this.http.get('user?id=' + id + '&' + this._atuhValue);
    }

    getAll(searchVal: string) {
        return this.http.get('user/list?searchVal=' + searchVal + '&' + this._atuhValue);
    }

    save(userData: User) {
        return this.http.post('user/add' + '?' + this._atuhValue, userData);
    }

    update(userData: User) {
        return this.http.put('user/edit' + '?' + this._atuhValue, userData);
    }

    delete(userData: User) {
        return this.http.put('user/delete' + '?' + this._atuhValue, userData);
    }
}