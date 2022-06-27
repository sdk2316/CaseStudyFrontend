import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AddflightService } from '../addflight.service';
import { Bookflight } from '../bookflight';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {
 //data coming from form and storing in var Bookflight

  Bookflight:Bookflight=new Bookflight();

  constructor(private addflightService:AddflightService,private router:Router) { }
  msg:any=""
  managebooked:string=""

  ngOnInit(): void {
  }

  bookFlight(){
    //passing form data to service fun
    this.addflightService.bookFlight(this.Bookflight).subscribe(data=>{
      this.msg=data;
    console.log(data);
  

      //var b = JSON.parse(JSON.stringify(data)); 
    },
    error=> this.msg='Please fill the form correctly'
   
    );
  }

  onSubmit(){
    this.bookFlight()
    this.managebooked=" Click Here to see your ticket"
   // this.router.navigate(['ticketbooked'])
  
   
    
  }

}
