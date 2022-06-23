import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AllflightlistComponent } from './allflightlist/allflightlist.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { FlightinformationComponent } from './flightinformation/flightinformation.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TicketbookedComponent } from './ticketbooked/ticketbooked.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { UregistrationComponent } from './uregistration/uregistration.component';
import { UserbookflightComponent } from './userbookflight/userbookflight.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ViewflightdetailsComponent } from './viewflightdetails/viewflightdetails.component';

const routes: Routes = [

  // { path: 'index', component:IndexComponent},
  // { path: '', redirectTo:'index',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'userregistration', component: UregistrationComponent},
  { path: 'home', component: HomeComponent},
  { path: 'allflights', component: AllflightlistComponent},
  { path: 'addflight', component: AddflightComponent},
  
  { path: 'updateflight/:flightNumber', component: UpdateflightComponent},
  { path: 'viewflightdetails/:flightNumber', component: ViewflightdetailsComponent},
  //user path bookflight ticketbooked userbookflight
  { path: 'flightsearch', component: FlightsearchComponent},
  {path:'flightinformation',component:FlightinformationComponent},
  {path:'bookflight',component:BookflightComponent},
  {path:'userbookflight',component:UserbookflightComponent},
  {path:'ticketbooked',component:TicketbookedComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
