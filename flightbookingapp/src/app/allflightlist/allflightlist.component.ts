import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFlight } from '../add-flight';
import { AddflightService } from '../addflight.service';

@Component({
  selector: 'app-allflightlist',
  templateUrl: './allflightlist.component.html',
  styleUrls: ['./allflightlist.component.css']
})
export class AllflightlistComponent implements OnInit {
  allflights:AddFlight[] | undefined ;
  

  constructor(private addflightService:AddflightService,private router:Router) { }

  ngOnInit(): void {
    this.getFlights();

  }

  public getFlights(){
    this.addflightService.getAllFlightsList().subscribe(data=>{

      this.allflights=data;
    })
  }

  updateFlight(flightNumber:number){
    this.router.navigate(['updateflight',flightNumber]);
  }

 deleteFlight(flightNumber:number){
  this.addflightService.deleteFlight(flightNumber).subscribe(data=>{
    console.log(data);
    this.getFlights();
  })

 
  }
  ViewFlightDetails(flightNumber:number){
    this.router.navigate(['viewflightdetails',flightNumber]);
  }

  

}
