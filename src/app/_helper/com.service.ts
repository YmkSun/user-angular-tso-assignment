import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
declare var jQuery: any;
@Injectable()
export class ComService {
    public _appbean: any;
    public _profile = {
        id: 0,
        username: '',
        password: '',
        auth: '',
        role: 0
    };

    public _appbeanSource = new Subject<any>();

    appbean$ = this._appbeanSource.asObservable();

    sendBean(x: any) {
        this._appbean = x;
        this._appbeanSource.next(x);
    }
    getBean(): any {
        return this._appbean;
    }
    getRole(): number {
        return this._profile.role;
    }
    isMenuBar(): boolean {
        return this._profile.role > 0;
    }

}