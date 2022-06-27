import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddflightService } from '../addflight.service';
import { Bookflight } from '../bookflight';

@Component({
  selector: 'app-ticketbooked',
  templateUrl: './ticketbooked.component.html',
  styleUrls: ['./ticketbooked.component.css']
})
export class TicketbookedComponent implements OnInit {

  Bookflight: Bookflight[] = []

  constructor(private addflightService:AddflightService,private router:Router) { }

  ngOnInit(): void {

    this.getAllBookedFlights()
  }

  public getAllBookedFlights() {
    this.addflightService.getAllBookedFlights().subscribe(data => {
      this.Bookflight = data;
    })
  }

}
