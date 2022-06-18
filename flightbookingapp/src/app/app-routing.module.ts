import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AllflightlistComponent } from './allflightlist/allflightlist.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UregistrationComponent } from './uregistration/uregistration.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [

  // { path: 'index', component:IndexComponent},
  // { path: '', redirectTo:'index',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'userregistration', component: UregistrationComponent},
  { path: 'home', component: HomeComponent},
  { path: 'allflights', component: AllflightlistComponent},
  { path: 'addflight', component: AddflightComponent},
  { path: 'userlogin', component: UserloginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
