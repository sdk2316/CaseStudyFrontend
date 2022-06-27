import { Component, OnInit } from '@angular/core';
import { Bookflight } from '../bookflight';

@Component({
  selector: 'app-ticketbooked',
  templateUrl: './ticketbooked.component.html',
  styleUrls: ['./ticketbooked.component.css']
})
export class TicketbookedComponent implements OnInit {

  ticketbooked:Bookflight=new Bookflight();

  constructor() { }

  ngOnInit(): void {
  }

}
