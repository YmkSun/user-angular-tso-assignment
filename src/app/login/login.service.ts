import { Injectable } from "@angular/core";
import { HttpService } from "../_helper/http.service";
@Injectable()
export class LoginService {

    constructor(private http: HttpService){
    }

    login(id: string, pwd: string) {
        return this.http.get('login?id='+id+"&pwd="+pwd);
    }
    
}