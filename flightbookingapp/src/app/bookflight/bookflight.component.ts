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
  msg: string = '';

  ngOnInit(): void {
  }

  bookFlight(){
    //passing form data to service fun
    this.addflightService.bookFlight(this.Bookflight).subscribe(data=>{
     
     
     
      console.log(data);
      var b = JSON.parse(JSON.stringify(data)); 
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.bookFlight()
    this.router.navigate(['ticketbooked'])
   
    
  }

}
