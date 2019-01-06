import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
//import { Data } from './class.data';
import {DataTest} from '../../models/dataTest';
interface mydata{
  obj:Object;
}

@Injectable({
  providedIn: 'root'
})
export class DataService2 {

  constructor(private http: HttpClient) { }
  configUrl = 'https://jsonplaceholder.typicode.com/posts';
  getConfigResponse(): Observable<HttpResponse<DataTest>> {
    return this.http.get<DataTest>(
      this.configUrl, { observe: 'response' });
  }
}
