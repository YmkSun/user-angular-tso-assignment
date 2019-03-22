import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable()
export class HttpService {
    private apiurl: string = environment.apiUrl;
    private http_headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(public http: HttpClient) { }
    get(url: string) {
        return this.http.get(this.apiurl + url).pipe(
            tap((res: Response) => res)
        );
    }
    post(url: string, j: any): Observable<any> {
        var params = JSON.stringify(j);
        return this.http.post<any>(this.apiurl + url, params, { headers: this.http_headers }).pipe(
            tap((res: Response) => res)
        );
    }
    put(url: string, j: any) {
        var params = JSON.stringify(j);
        return this.http.put(this.apiurl + url, params, { headers: this.http_headers }).pipe(
            tap((res: Response) => res)
        );
    }
    delete(url: string, j: any) {
        return this.http.delete(this.apiurl + url, { headers: this.http_headers }).pipe(
            tap((res: Response) => res)
        );
    }

} 