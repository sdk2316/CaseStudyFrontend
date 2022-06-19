import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddFlight } from '../add-flight';
import { AddflightService } from '../addflight.service';

@Component({
  selector: 'app-viewflightdetails',
  templateUrl: './viewflightdetails.component.html',
  styleUrls: ['./viewflightdetails.component.css']
})
export class ViewflightdetailsComponent implements OnInit {
  flightNumber: number = 0;
  addFlight: AddFlight = new AddFlight();


  constructor(private addflightService: AddflightService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this. flightNumber=this.route.snapshot.params['flightNumber'];
    this.addflightService.getSearchFlightByflightNumber(this.flightNumber).subscribe(data=>{
      this.addFlight=data;
    })
  }

}
