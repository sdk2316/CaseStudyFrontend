import { Component, OnInit } from '@angular/core';
import { AddFlight } from '../add-flight';
import { AddflightService } from '../addflight.service';

@Component({
  selector: 'app-allflightlist',
  templateUrl: './allflightlist.component.html',
  styleUrls: ['./allflightlist.component.css']
})
export class AllflightlistComponent implements OnInit {
  allflights:AddFlight[] | undefined;

  constructor(private addflightService:AddflightService) { }

  ngOnInit(): void {
    this.getFlights();

  }

  public getFlights(){
    this.addflightService.getAllFlightsList().subscribe(data=>{

      this.allflights=data;
    })
  }

}
