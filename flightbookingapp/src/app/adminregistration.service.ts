import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adminentity } from './adminentity';

@Injectable({
  providedIn: 'root'
})
export class AdminregistrationService {

  constructor(private httpClient:HttpClient) { }

  AdminLogin(adminentity:Adminentity):Observable<Object>{
    return this.httpClient.post(`http://localhost:9094/admin/login`,adminentity,{
      responseType:'text'
    })
  }

  adminRegistration(adminentity:Adminentity):Observable<Object>{
    return this.httpClient.post(`http://localhost:9094/admin/registeration`,adminentity,{
      responseType:'text'
    })
  }
}