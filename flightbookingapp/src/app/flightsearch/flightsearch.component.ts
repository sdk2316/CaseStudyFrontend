import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AddFlight } from '../add-flight';
import { AddflightService } from '../addflight.service';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class FlightsearchComponent implements OnInit {
  allflights:AddFlight[] | undefined ;

  fromPlace:string =""
  toPlace:string =""
  startDate:any

  sms:string=""

  //Create FormGrouprequiredForm!: FormGroup;
  constructor(private addflightService:AddflightService,private router:Router) { 
    
  }

  ngOnInit(): void {
   // this.getAllSearch();
   //getAllSearch(fromPlace,toPlace,startDate);
  }
 

  onSubmit(){
    this.sms=" List of Flights... "
    this.getAllSearch(this.fromPlace,this.toPlace,this.startDate);
  }

  getAllSearch(fromPlace:string,toPlace:string,startDate:number):void{
 this.addflightService.searchFlight(fromPlace,toPlace,startDate).subscribe(data=>{
  console.log(data)
  this.allflights=data;
  
 // this.router.navigate(['/flightinformation'])
})
  }

}
