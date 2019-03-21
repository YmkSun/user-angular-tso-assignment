import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable()
export class HttpService {
    private apiurl: string = environment.apiUrl;
    constructor(public http: HttpClient) { }
    get(url: string) {
        return this.http.get(this.apiurl + url).pipe(
            tap((res: Response) => (res.status == 200) ? res.json() : null),
            catchError(this.handleError('get', []))
        );
    }
    post(url: string, j: any): Observable<any> {
        var params = JSON.stringify(j);
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(this.apiurl + url, params, { headers: headers }).pipe(
            tap((res: Response) => res.json()),
            catchError(this.handleError('post'))
        );
    }
    put(url: string, j: any) {
        var params = JSON.stringify(j);
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(this.apiurl + url, params, { headers: headers }).pipe(
            tap((res: Response) =>  res.json()),
            catchError(this.handleError('put'))
        );
    }
    upload(url: string, appendData: Array<any>) {
        let fd = new FormData();
        appendData.forEach((e: any) => {
            fd.append(e.name, e.value);
        });
        return this.http.post(this.apiurl + url, fd).pipe(
            tap((res: Response) =>  res.json()),
            catchError(this.handleError('upload'))
        );
    } 
    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
    log(message: string) {
        //change here
        console.log(`HttpService: ${message}`);
    }
} 