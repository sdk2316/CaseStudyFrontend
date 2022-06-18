import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './componets/userform/userform.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { AboutComponent } from './componets/about/about.component';
import { CounterComponent } from './componets/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    NavbarComponent,
    AboutComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
