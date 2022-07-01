import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UregistrationComponent } from './uregistration/uregistration.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AllflightlistComponent } from './allflightlist/allflightlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { ViewflightdetailsComponent } from './viewflightdetails/viewflightdetails.component';
import {MatIconModule} from '@angular/material/icon';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { FlightinformationComponent } from './flightinformation/flightinformation.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { TicketbookedComponent } from './ticketbooked/ticketbooked.component';
import { UserbookflightComponent } from './userbookflight/userbookflight.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    FooterComponent,
    UserloginComponent,
    UregistrationComponent,
    AddflightComponent,
    AllflightlistComponent,
    UpdateflightComponent,
    ViewflightdetailsComponent,
    FlightsearchComponent,
    FlightinformationComponent,
    BookflightComponent,
    TicketbookedComponent,
    UserbookflightComponent,
    AdminregistrationComponent,
    ContactusComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule
   
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
