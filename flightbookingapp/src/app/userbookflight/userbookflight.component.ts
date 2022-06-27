import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddflightService } from '../addflight.service';
import { Bookflight } from '../bookflight';

@Component({
  selector: 'app-userbookflight',
  templateUrl: './userbookflight.component.html',
  styleUrls: ['./userbookflight.component.css']
})
export class UserbookflightComponent implements OnInit {

  bookflight:Bookflight =new Bookflight();

  allBookflight:Bookflight[]=[]
  smg:any=''

  constructor(private addflightService: AddflightService, private route: ActivatedRoute, private router: Router) { }
  

  ngOnInit(): void {
   this. getAllBookedFlight();
  }

  getAllBookedFlight(){
    this.addflightService.getAllBookedFlights().subscribe(data=>{
      console.log(data)
      this.allBookflight=data
      
    })

  }

  deleteFlight(id:number){
    this.addflightService.deleteBookedFlight(id).subscribe(data=>{
      
     this.smg=data
     console.log(data)
     this.getAllBookedFlight();
    })
  }

}
