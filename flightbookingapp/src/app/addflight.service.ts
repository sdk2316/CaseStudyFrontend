import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFlight } from './add-flight';

@Injectable({
  providedIn: 'root'
})
export class AddflightService {
  private basrURL="http://localhost:9094/allFlights";

  private ubaseURL="http://localhost:9090/user/api/v1.0"

  constructor(private httpClient:HttpClient) { }

// user end point
searchFlight(fromPlace:string,toPlace:string,startDate:any):Observable<AddFlight[]>{
  return this.httpClient.get<AddFlight[]>("http://localhost:9090/user/api/v1.0/"+"search/"+fromPlace+"/"+toPlace+"/"+startDate);
}

bookFlight(bookflight:Object):Observable<Object>{
  return this.httpClient.post(`http://localhost:9090/user/api/v1.0/bookFlight`,bookflight)
}

// above all user end point
//GET /user/api/v1.0/search/{fromPlace}/{toPlace}/{startDate}

  getAllFlightsList():Observable<AddFlight[]>{
    return this.httpClient.get<AddFlight[]>(`${this.basrURL}`);
  }

  // for postmapping
  addFlight( addFlight:AddFlight):Observable<Object>{
   // return this.httpClient.post(`${this.basrURL}`,addFlight)
    return this.httpClient.post(`http://localhost:9094/addFlight`,addFlight)

  }

  getSearchFlightByflightNumber(flightNumber:number):Observable<AddFlight>{
    return this.httpClient.get<AddFlight>(`http://localhost:9094/getFlightsByNumber/${flightNumber}`);
  }

  updateFlight(flightNumber:number,addFlight:AddFlight):Observable<Object>{
    return this.httpClient.put(`http://localhost:9094/updateFlight/${flightNumber}`,addFlight);
  }

  deleteFlight(flightNumber:number):Observable<Object>{
    return this.httpClient.delete(`http://localhost:9094/deleteFlight/${flightNumber}`);
  }

  getSearchFlightByflightName(flightName:string):Observable<AddFlight>{
    return this.httpClient.get<AddFlight>(` http://localhost:9094/flightsByName/${flightName}`);
  }
}
