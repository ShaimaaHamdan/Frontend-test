import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Value } from './value';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'http://localhost:8080/';
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getValues(start:string,end:string): Observable<Value[]> {
    const url = `${this.apiUrl}reading?start=${start}&end=${end}`
     return this.http.get<any>(url,this.httpOptions)
  }

  updateValues(row:Value) : Observable<any>  {
    const url = `${this.apiUrl}reading`;
    return this.http.put<any>(url,row,this.httpOptions) ;
  }
}
