import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFlight } from './add-flight';

@Injectable({
  providedIn: 'root'
})
export class AddflightService {
  private basrURL="http://localhost:9094/allFlights";

  constructor(private httpClient:HttpClient) { }

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
