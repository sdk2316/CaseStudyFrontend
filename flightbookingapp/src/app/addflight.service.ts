import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFlight } from './add-flight';
import { Bookflight } from './bookflight';

@Injectable({
  providedIn: 'root'
})
export class AddflightService {
  //:9094/allFlights
  baseURL="http://ec2-35-90-107-69.us-west-2.compute.amazonaws.com"

 // private baseURLU="http://ec2-35-88-83-206.us-west-2.compute.amazonaws.com"

  constructor(private httpClient:HttpClient) { }

// user end point
searchFlight(fromPlace:string,toPlace:string,startDate:any):Observable<AddFlight[]>{
  return this.httpClient.get<AddFlight[]>(`${this.baseURL}:9090/user/api/v1.0/search/${fromPlace}/${toPlace}/${startDate}`);
}

bookFlight(bookflight:Bookflight):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}:9090/user/api/v1.0/bookFlight`,bookflight,{
    responseType:'text'
  })
}

getAllBookedFlights():Observable<Bookflight[]>{
  return this.httpClient.get<Bookflight[]>(`${this.baseURL}:9090/user/api/v1.0/getAllBookFlight`)
}

deleteBookedFlight(pnr:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}:9090/user/api/v1.0/getCancelByPnr/${pnr}`,{
    responseType:'text'
  });
}

getBookFlightByEmail(email:string):Observable<Bookflight[]>{
  return this.httpClient.get<Bookflight[]>(`${this.baseURL}:9090/user/api/v1.0/getFlightByEmailId/${email}`
);
}

getBookFlightPnr(pnr:number):Observable<Bookflight[]>{
  return this.httpClient.get<Bookflight[]>(`${this.baseURL}:9090/user/api/v1.0/getFlightByPnr/${pnr}`);
}

// above all user end point
//GET /user/api/v1.0/search/{fromPlace}/{toPlace}/{startDate}

  getAllFlightsList():Observable<AddFlight[]>{
    return this.httpClient.get<AddFlight[]>(`${this.baseURL}:9094/allFlights`);
  }

  // for postmapping
  addFlight( addFlight:AddFlight):Observable<Object>{
   // return this.httpClient.post(`${this.basrURL}`,addFlight)
    return this.httpClient.post(`${this.baseURL}:9094/addFlight`,addFlight
    )

  }

  getSearchFlightByflightNumber(flightNumber:number):Observable<AddFlight>{
    return this.httpClient.get<AddFlight>(`${this.baseURL}:9094/getFlightsByNumber/${flightNumber}`);
  }

  updateFlight(flightNumber:number,addFlight:AddFlight):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}:9094/updateFlight/${flightNumber}`,addFlight);
  }

  deleteFlight(flightNumber:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}:9094/deleteFlight/${flightNumber}`);
  }

  getSearchFlightByflightName(flightName:string):Observable<AddFlight>{
    return this.httpClient.get<AddFlight>(`${this.baseURL}:9094/flightsByName/${flightName}`);
  }
}
