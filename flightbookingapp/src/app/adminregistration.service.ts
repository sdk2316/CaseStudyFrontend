import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adminentity } from './adminentity';

@Injectable({
  providedIn: 'root'
})
export class AdminregistrationService {
private URL="http://ec2-35-90-107-69.us-west-2.compute.amazonaws.com"
  

  constructor(private httpClient:HttpClient) { }

  AdminLogin(adminentity:Adminentity):Observable<Object>{
    return this.httpClient.post(`${this.URL}:9094/admin/login`,adminentity);
  }

  adminRegistration(adminentity:Adminentity):Observable<Object>{
    return this.httpClient.post(`${this.URL}:9094/admin/registeration`,adminentity,{
      responseType:'text'
    })
  }
}