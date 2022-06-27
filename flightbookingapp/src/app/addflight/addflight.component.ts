import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFlight } from '../add-flight';
import { AddflightService } from '../addflight.service';
@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
  addFlight:AddFlight=new AddFlight(); //data coming from form and storing in var addFlight

  constructor(private addflightService:AddflightService,private router:Router) { }
  msg: string = '';

  ngOnInit(): void {
  }
  saveFlight(){
    //passing form data to service fun
    this.addflightService.addFlight(this.addFlight).subscribe(data=>{
      console.log(data);
      this.goAllFlightData();
    },
    error=>console.log(error));
  }
  goAllFlightData(){
    this.router.navigate(['/allflights'])
  }
  onSubmit(){
    console.log(this.addFlight)
    this.saveFlight();
    this.msg = 'New Flight Added Successfully';
    
  }
  
}
