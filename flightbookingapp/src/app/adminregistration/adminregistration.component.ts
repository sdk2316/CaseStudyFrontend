import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminentity } from '../adminentity';
import { AdminregistrationService } from '../adminregistration.service';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {
  adminentity:Adminentity=new Adminentity();
  msg:string=''
  constructor(private adminregistrationService:AdminregistrationService, private router:Router) { }

  ngOnInit(): void {
  }

  adminRegistration(){

    const observable = this.adminregistrationService.adminRegistration(this.adminentity);

    observable.subscribe(
      (response: any) => {
        this.msg=response
        console.log(response);
      //  this.admins.push(response);
       // this.router.navigate(['/home']);
      
      },
      error =>{
        console.log("Exception occured");
     //   alert('User Name or password is wrong!');
        this.msg="User Name or password is wrong!";
    }
    )

  }

}
