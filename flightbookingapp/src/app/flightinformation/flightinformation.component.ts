import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFlight } from '../add-flight';
import { AddflightService } from '../addflight.service';
import { Bookflight } from '../bookflight';

@Component({
  selector: 'app-flightinformation',
  templateUrl: './flightinformation.component.html',
  styleUrls: ['./flightinformation.component.css']
})
export class FlightinformationComponent implements OnInit {
  Bookflight: Bookflight[] = []

  PNR: number = 0;
  email: string = ''
  msg: string = ''
  constructor(private addflightService: AddflightService, private router: Router) { }

  ngOnInit(): void {
    //this.getAllBookedFlights()
  }

  public getAllBookedFlights() {
    this.addflightService.getAllBookedFlights().subscribe(data => {
      this.Bookflight = data;
    })
  }

  EmailSearch() {

    this.addflightService.getBookFlightByEmail(this.email).subscribe(data => {
      this.Bookflight = data

    }, error => { this.msg = 'Please enter correct email id'})
  }

  PnrSearch() {

    this.addflightService.getBookFlightPnr(this.PNR).subscribe(data=>{
      this.Bookflight = data
    }, error => { this.msg = 'Please enter correct PNR' })

  }

}
