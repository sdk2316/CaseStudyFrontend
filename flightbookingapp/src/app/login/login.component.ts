import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminentity } from '../adminentity';
import { AdminregistrationService } from '../adminregistration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminentity:Adminentity=new Adminentity();

  
  msg:any=''

  constructor(private adminregistrationService:AdminregistrationService, private router:Router) { }

  ngOnInit(): void {
    
  }

  adminLogin(){
    
    const observable = this.adminregistrationService. AdminLogin(this.adminentity);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      //  this.admins.push(response);
        this.router.navigate(['/home']);
      
      },
      error =>{
        console.log("Exception occured");
     //   alert('User Name or password is wrong!');
        this.msg="User Name or password is wrong!";
    }
    )
  }

}
