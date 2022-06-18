import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componets/about/about.component';
import { CounterComponent } from './componets/counter/counter.component';
import { UserformComponent } from './componets/userform/userform.component';

const routes: Routes = [{ path: 'about', component: AboutComponent }, { path: 'registration', component: UserformComponent }, { path: 'counter', component: CounterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
