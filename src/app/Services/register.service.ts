import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { user } from "../models/user.js";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  register(data):Observable<user[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log("service");
    return this.http.post<user[]>('http://localhost:9090/user/', data,httpOptions);
    //return this.http.post<user[]>('http://localhost:9090/user/login', data, httpOptions);
  }

}


