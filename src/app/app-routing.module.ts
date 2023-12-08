import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ManComponent } from './man/man.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'login',pathMatch: 'full'
  },
  {
   path: 'login', component: LoginComponent 
  },
  {
   path: 'signup', component: SignupComponent 
  }, 
  {
   path:'dashboard' , component: DashboardComponent
  },
    {
   path:'home' , component: HomeComponent
  },
    {
   path:'about' , component: AboutComponent
  },
    {
   path:'contact' , component: ContactComponent
  },
  {
   path:'man' , component: ManComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
