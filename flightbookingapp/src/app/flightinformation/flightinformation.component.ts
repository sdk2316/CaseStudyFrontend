import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFlight } from '../add-flight';
import { AddflightService } from '../addflight.service';

@Component({
  selector: 'app-flightinformation',
  templateUrl: './flightinformation.component.html',
  styleUrls: ['./flightinformation.component.css']
})
export class FlightinformationComponent implements OnInit {
  allflights:AddFlight[] | undefined ;
  constructor(private addflightService:AddflightService,private router:Router) { }

  ngOnInit(): void {
    this.getFlights()
  }

  public getFlights(){
    this.addflightService.getAllFlightsList().subscribe(data=>{

      this.allflights=data;
    })
  }

}
